import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1D3557' },
          headerTintColor: '#FFFFFF',
          headerBlurEffect: 'systemMaterial',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ title: 'Atlas' }} />
      </Stack>
    </ThemeProvider>
  );
}
