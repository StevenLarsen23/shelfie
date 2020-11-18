require('dotenv').config();
const ctrl = require('./controller');
const express = require('express');
const massive = require('massive');
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express()

app.use(cors())
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected');
})
.catch((err) => console.log(err));

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.editProduct)

app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))