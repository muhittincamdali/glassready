import UIKit

final class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(
        _ scene: UIScene,
        willConnectTo session: UISceneSession,
        options connectionOptions: UIScene.ConnectionOptions
    ) {
        guard let windowScene = scene as? UIWindowScene else { return }
        let shipments = UINavigationController(rootViewController: ShipmentsViewController())
        shipments.tabBarItem = UITabBarItem(
            title: "Shipments", image: UIImage(systemName: "shippingbox"), tag: 0)
        let map = UINavigationController(rootViewController: PortMapViewController())
        map.tabBarItem = UITabBarItem(title: "Ports", image: UIImage(systemName: "map"), tag: 1)

        let tabs = UITabBarController()
        tabs.viewControllers = [shipments, map]
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = tabs
        window.makeKeyAndVisible()
        self.window = window
    }
}
