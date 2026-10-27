import UIKit

struct Shipment {
    let code: String
    let route: String
    let status: String
}

let sampleShipments: [Shipment] = (1...24).map { number in
    Shipment(
        code: "HB-\(4100 + number)",
        route: ["Rotterdam → Izmir", "Busan → Hamburg", "Santos → Valencia"][number % 3],
        status: ["At sea", "In port", "Customs"][number % 3])
}

final class ShipmentsViewController: UITableViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Shipments"
        navigationController?.navigationBar.prefersLargeTitles = true
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "shipment")
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        sampleShipments.count
    }

    override func tableView(
        _ tableView: UITableView, cellForRowAt indexPath: IndexPath
    ) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "shipment", for: indexPath)
        let shipment = sampleShipments[indexPath.row]
        var content = cell.defaultContentConfiguration()
        content.text = "\(shipment.code)  ·  \(shipment.status)"
        content.secondaryText = shipment.route
        content.image = UIImage(systemName: "shippingbox.fill")
        cell.contentConfiguration = content
        return cell
    }
}
