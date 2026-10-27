import UIKit

extension UIColor {
    static let harborNavy = UIColor(red: 0.04, green: 0.16, blue: 0.32, alpha: 1)
}

@main
final class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        // The bars keep the system background (Liquid Glass on iOS 26 and later); the brand colour
        // moves to the tint of their buttons and the selected tab.
        UINavigationBar.appearance().tintColor = .harborNavy
        UITabBar.appearance().tintColor = .harborNavy
        return true
    }

    func application(
        _ application: UIApplication,
        configurationForConnecting connectingSceneSession: UISceneSession,
        options: UIScene.ConnectionOptions
    ) -> UISceneConfiguration {
        UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }
}
