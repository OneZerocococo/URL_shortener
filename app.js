const express = require('express')
const app = express()
require('./config/mongoose')



app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})