let inventory = []

module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db');
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory);
        }).catch((err) => res.status(500).send(err))
    },

    addInventory: (req, res) => {
        const db = req.app.get('db');
        const {imageURL, name, price} = req.body;
        db.add_character({imageURL, name, price}).then(newProduct => res.status(200).send(newProduct))
        .catch((err) => res.status(500).send(err))
    }
}