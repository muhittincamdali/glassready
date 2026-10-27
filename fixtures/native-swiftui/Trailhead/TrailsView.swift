import SwiftUI

struct Trail: Identifiable {
    let id = UUID()
    let name: String
    let distance: String
}

private let nearby = [
    Trail(name: "Lycian Way, Faralya", distance: "12.4 km"),
    Trail(name: "Kaçkar Lakes", distance: "9.1 km"),
    Trail(name: "Uludağ Summit", distance: "7.8 km"),
    Trail(name: "Belgrad Forest Loop", distance: "6.5 km"),
]

private let saved = [
    Trail(name: "Cappadocia Rose Valley", distance: "4.2 km"),
    Trail(name: "Olympos Beach Path", distance: "3.0 km"),
]

struct TrailsView: View {
    @State private var selected: Trail?

    var body: some View {
        NavigationStack {
            List {
                Section("NEARBY") {
                    ForEach(nearby) { trail in
                        Button(trail.name) { selected = trail }
                    }
                }
                Section(header: Text("SAVED")) {
                    ForEach(saved) { trail in
                        Text(trail.name)
                    }
                }
            }
            .navigationTitle("Trails")
            .toolbarBackground(Color.green, for: .navigationBar)
            .toolbarBackgroundVisibility(.visible, for: .navigationBar)
            .toolbarColorScheme(.dark, for: .navigationBar)
            .sheet(item: $selected) { trail in
                Text("\(trail.name) · \(trail.distance)")
                    .presentationDetents([.medium])
                    .presentationBackground(Color(.systemGroupedBackground))
            }
        }
    }
}
