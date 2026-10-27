import Flutter
import MapKit
import UIKit

@main
@objc class AppDelegate: FlutterAppDelegate, FlutterImplicitEngineDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  func didInitializeImplicitFlutterEngine(_ engineBridge: FlutterImplicitEngineBridge) {
    GeneratedPluginRegistrant.register(with: engineBridge.pluginRegistry)
    if let registrar = engineBridge.pluginRegistry.registrar(forPlugin: "PierMap") {
      registrar.register(PierMapFactory(), withId: "ferry/pier-map")
    }
  }
}

/// The native map behind the Piers tab, shown in Flutter through a UiKitView.
final class PierMapFactory: NSObject, FlutterPlatformViewFactory {
  func create(
    withFrame frame: CGRect, viewIdentifier viewId: Int64, arguments args: Any?
  ) -> FlutterPlatformView {
    PierMap(frame: frame)
  }

  func createArgsCodec() -> FlutterMessageCodec & NSObjectProtocol {
    FlutterStandardMessageCodec.sharedInstance()
  }
}

final class PierMap: NSObject, FlutterPlatformView {
  private let map: MKMapView

  init(frame: CGRect) {
    map = MKMapView(frame: frame)
    map.setRegion(
      MKCoordinateRegion(
        center: CLLocationCoordinate2D(latitude: 41.0165, longitude: 28.9755),
        span: MKCoordinateSpan(latitudeDelta: 0.08, longitudeDelta: 0.08)),
      animated: false)
    super.init()
  }

  func view() -> UIView { map }
}
