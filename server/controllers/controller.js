module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(err));
  },

  addNew: (req, res) => {
    const {name, price, img} = req.body;
    const db = req.app.get("db");
    db.add_new_product([name, price, img])
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(err));
  },

  delete: (req, res) => {
    const {id} = req.params;
    const db = req.app.get("db");
    db.delete(id)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(err));
  },

  edit: (req, res) => {
      const {id} = req.params
      const {name, price, img} = req.body
      const db = req.app.get("db");
      db.edit({id, name, price, img})
        .then(result => {
          res.status(200).send(result);
        })
        .catch(err => console.log(err))
  }
};
