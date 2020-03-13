module.exports = {
getInventory: (req, res) => {
   const db = req.app.get('db');
   db.get_inventory()
   .then(products => res.status(200).send(products))
   .catch(err => res.status(500).send(err))
},
addProduct: (req, res) => {
   const db =req.app.get('db');
   const product = {...req.body}
   db.add_product(product)
   .then(()=> res.sendStatus(200))
   .catch(err => res.status(500).send(err))
},
deleteProduct: (req, res) => {
   const db = req.app.get('db');
   const  {id} = req.params
   db.delete_product(+id)
   .then(()=> res.sendStatus(200))
   .catch(err=> res.status(500).send(err))
},
editProduct: (req, res) => {
   const db = req.app.get('db')
   const {id} = req.params
   const {name, price, imgurl} = req.body;
   db.edit_product([+id, name, +price, imgurl])
   .then(() => res.sendStatus(200))
   .catch(err => res.status(500).send(err))
},
singleProduct: (req, res) => {
   const db = req.app.get('db')
   const {id} = req.params
   db.single_product(+id)
   .then(product => res.status(200).send(product))
   .catch(err => res.status(500).send(err))
}
}