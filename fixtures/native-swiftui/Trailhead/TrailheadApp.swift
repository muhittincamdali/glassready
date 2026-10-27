import SwiftUI

@main
struct TrailheadApp: App {
    var body: some Scene {
        WindowGroup {
            TabView {
                Tab("Trails", systemImage: "figure.hiking") {
                    TrailsView()
                }
                Tab("Map", systemImage: "map") {
                    TrailMapView()
                }
            }
        }
    }
}
