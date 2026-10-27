import UIKit

/// A list of ports with a summary panel above the tab bar.
final class PortMapViewController: UIViewController {
    private lazy var summary: UIVisualEffectView = {
        if #available(iOS 26.0, *) {
            return UIVisualEffectView(effect: UIGlassEffect())
        }
        return UIVisualEffectView(effect: UIBlurEffect(style: .systemThickMaterial))
    }()

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
        // The safe area already ends above the tab bar, whatever its height.
        NSLayoutConstraint.activate([
            summary.leadingAnchor.constraint(equalTo: view.layoutMarginsGuide.leadingAnchor),
            summary.trailingAnchor.constraint(equalTo: view.layoutMarginsGuide.trailingAnchor),
            summary.heightAnchor.constraint(equalToConstant: 64),
            summary.bottomAnchor.constraint(
                equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -12),
            label.centerXAnchor.constraint(equalTo: summary.contentView.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: summary.contentView.centerYAnchor),
        ])
    }
}
