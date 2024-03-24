const express = require('express')
const app = express()
const morgan  = require("morgan")
//route
const port = 3000

app.use(morgan("combined"))
app.get('/trang-chu', (req, res) => {
  res.send('Hello World! and I  ')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})