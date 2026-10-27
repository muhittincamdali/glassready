// Old-style "OpenStep" property lists, the format of project.pbxproj: dictionaries in { }, arrays
// in ( ), quoted or bare strings and <hex data>, with C comments.

export type OpenStepValue = string | OpenStepValue[] | OpenStepDict;
export interface OpenStepDict {
  [key: string]: OpenStepValue;
}

export class XcodeProjectError extends Error {
  override name = 'XcodeProjectError';
}

/** Parses an old-style property list such as project.pbxproj. */
export function parseOpenStep(text: string): OpenStepValue {
  let index = 0;

  const fail = (message: string): never => {
    const line = text.slice(0, index).split('\n').length;
    throw new XcodeProjectError(`${message} (line ${line})`);
  };

  const skip = () => {
    for (;;) {
      const char = text[index];
      if (char === undefined) return;
      if (/\s/.test(char)) index++;
      else if (text.startsWith('//', index)) {
        const end = text.indexOf('\n', index);
        index = end === -1 ? text.length : end + 1;
      } else if (text.startsWith('/*', index)) {
        const end = text.indexOf('*/', index + 2);
        if (end === -1) fail('Unclosed comment');
        index = end + 2;
      } else return;
    }
  };

  const quoted = (): string => {
    index++;
    let result = '';
    for (;;) {
      const char = text[index++];
      if (char === undefined) fail('Unclosed string');
      if (char === '"') return result;
      if (char !== '\\') {
        result += char;
        continue;
      }
      const escaped = text[index++];
      if (escaped === 'n') result += '\n';
      else if (escaped === 't') result += '\t';
      else if (escaped === 'r') result += '\r';
      else if (escaped === 'U' || escaped === 'u') {
        const hex = text.slice(index, index + 4);
        if (!/^[0-9a-fA-F]{4}$/.test(hex)) fail('Bad unicode escape');
        result += String.fromCharCode(Number.parseInt(hex, 16));
        index += 4;
      } else if (escaped !== undefined) result += escaped;
    }
  };

  const bare = (): string => {
    const match = /^[A-Za-z0-9_$+./:-]+/.exec(text.slice(index, index + 4096));
    if (!match) return fail(`Unexpected character "${text[index] ?? 'end of file'}"`);
    index += match[0].length;
    return match[0];
  };

  const value = (): OpenStepValue => {
    skip();
    const char = text[index];
    if (char === '{') {
      index++;
      // No prototype: a key named __proto__ stays a key (see emptyDict in plist-value.ts).
      const dict = Object.create(null) as OpenStepDict;
      for (;;) {
        skip();
        if (text[index] === '}') {
          index++;
          return dict;
        }
        const key = text[index] === '"' ? quoted() : bare();
        skip();
        if (text[index] !== '=') fail('Expected "="');
        index++;
        dict[key] = value();
        skip();
        if (text[index] !== ';') fail('Expected ";"');
        index++;
      }
    }
    if (char === '(') {
      index++;
      const array: OpenStepValue[] = [];
      for (;;) {
        skip();
        if (text[index] === ')') {
          index++;
          return array;
        }
        array.push(value());
        skip();
        if (text[index] === ',') index++;
        else if (text[index] !== ')') fail('Expected "," or ")"');
      }
    }
    if (char === '"') return quoted();
    if (char === '<') {
      const end = text.indexOf('>', index);
      if (end === -1) fail('Unclosed data');
      const data = text.slice(index + 1, end).replace(/\s+/g, '');
      index = end + 1;
      return data;
    }
    return bare();
  };

  const result = value();
  skip();
  if (index < text.length) fail('Unexpected text after the property list');
  return result;
}
