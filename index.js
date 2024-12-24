const express = require('express')  //nạp thu vien express
const app = express()  //call chạy thực thi
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






