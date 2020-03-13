require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING} = process.env
      ctrl = require('./controller')

app.use(express.json())

app.get('/api/inventory', ctrl.getInventory)
app.post(`/api/product`, ctrl.addProduct)


massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
})
.then(db => {
   app.set('db', db)
   console.log('DB connected')
   app.listen(SERVER_PORT, ()=> console.log(`Server is running on Port:${SERVER_PORT}`))
})



