import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

void main() => runApp(const FerryApp());

const ferryBlue = Color(0xFF0A3D62);

const crossings = [
  ('Eminönü → Kadıköy', '20 min'),
  ('Karaköy → Üsküdar', '15 min'),
  ('Beşiktaş → Kadıköy', '25 min'),
  ('Kabataş → Adalar', '90 min'),
];

class FerryApp extends StatelessWidget {
  const FerryApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const CupertinoApp(
      title: 'Ferry',
      debugShowCheckedModeBanner: false,
      home: FerryTabs(),
    );
  }
}

class FerryTabs extends StatelessWidget {
  const FerryTabs({super.key});

  @override
  Widget build(BuildContext context) {
    return CupertinoTabScaffold(
      tabBar: CupertinoTabBar(
        backgroundColor: CupertinoColors.white,
        items: const [
          BottomNavigationBarItem(icon: Icon(CupertinoIcons.time), label: 'Timetable'),
          BottomNavigationBarItem(icon: Icon(CupertinoIcons.map), label: 'Piers'),
        ],
      ),
      tabBuilder: (context, index) =>
          index == 0 ? const TimetablePage() : const PierMapPage(),
    );
  }
}

class TimetablePage extends StatelessWidget {
  const TimetablePage({super.key});

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      child: CustomScrollView(
        slivers: [
          const CupertinoSliverNavigationBar(
            largeTitle: Text('Timetable'),
            backgroundColor: ferryBlue,
          ),
          SliverList.builder(
            itemCount: crossings.length,
            itemBuilder: (context, index) => CupertinoListTile(
              title: Text(crossings[index].$1),
              additionalInfo: Text(crossings[index].$2),
            ),
          ),
        ],
      ),
    );
  }
}

/// The pier map is a native MKMapView the app registers as a platform view.
class PierMapPage extends StatelessWidget {
  const PierMapPage({super.key});

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(
        middle: Text('Piers'),
        backgroundColor: ferryBlue,
      ),
      child: defaultTargetPlatform == TargetPlatform.iOS
          ? const UiKitView(
              viewType: 'ferry/pier-map',
              creationParamsCodec: StandardMessageCodec(),
            )
          : const Center(child: Text('Map available on iOS')),
    );
  }
}
