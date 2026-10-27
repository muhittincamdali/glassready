import SwiftUI

/// A full-screen map with the app's own bottom bar instead of the system tab bar.
struct TrailMapView: View {
    var body: some View {
        ZStack(alignment: .bottom) {
            LinearGradient(colors: [.green, .teal], startPoint: .top, endPoint: .bottom)
                .ignoresSafeArea()
            HStack(spacing: 32) {
                Label("Start", systemImage: "play.fill")
                Label("Layers", systemImage: "square.3.layers.3d")
            }
            .frame(maxWidth: .infinity)
            .frame(height: 83)
            .background(.ultraThinMaterial)
        }
        .toolbar(.hidden, for: .tabBar)
    }
}
