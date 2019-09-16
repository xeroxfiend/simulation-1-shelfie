//set up server and dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const massive = require("massive");
const ctrl = require('./controllers/controller')

app.use(express.json());

//endpoints
app.get('/api/inventory', ctrl.getInventory)

app.get('/api/inventory/:id', ctrl.getOneProduct)

app.post('/api/product', ctrl.addNew)

app.put('/api/product/:id', ctrl.edit)

app.delete('/api/product/:id', ctrl.delete)

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected to the database, and ");
  app
    .listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}!`))
}).catch(err => console.log(err));

