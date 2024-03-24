const express = require('express')
const app = express()

//route
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello World! and I  ')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})