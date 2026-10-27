import UIKit

/// A list of ports with a summary panel that sits on top of the tab bar.
final class PortMapViewController: UIViewController {
    private let summary = UIVisualEffectView(effect: UIBlurEffect(style: .systemThickMaterial))

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Ports"
        view.backgroundColor = .systemTeal

        let label = UILabel()
        label.text = "3 ships due in Izmir today"
        label.font = .preferredFont(forTextStyle: .headline)
        label.translatesAutoresizingMaskIntoConstraints = false
        summary.contentView.addSubview(label)

        summary.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(summary)
        // The panel ends where the tab bar starts: 49 points above the bottom safe area.
        NSLayoutConstraint.activate([
            summary.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            summary.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            summary.heightAnchor.constraint(equalToConstant: 64),
            summary.bottomAnchor.constraint(
                equalTo: view.bottomAnchor, constant: -(view.safeAreaInsets.bottom + 49)),
            label.centerXAnchor.constraint(equalTo: summary.contentView.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: summary.contentView.centerYAnchor),
        ])
    }
}
