let inventory = []

module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db');
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory);
        }).catch((err) => res.status(500).send(err))
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, img} = req.body;
        db.create_product([name, price, img]).then(createProduct => res.status(200).send(createProduct))
        .catch((err) => res.status(500).send(err))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product(id).then(deleteProduct => res.status(200).send(deleteProduct))
        .catch((err) => res.status(500).send(err))
        
    },

    editProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {name, price, img} = req.body
        db.edit_product([id, name, price, img]).then(editProduct => res.status(200).send(editProduct))
        .catch((err) => res.status(500).send(err))
    }
}