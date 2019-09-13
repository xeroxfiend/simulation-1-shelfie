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
      const {name, price, img} = req.body
      const db = req.app.get("db");
    db.add_new_product([name, price, img])
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(err))
  }
};
