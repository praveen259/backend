require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT||4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})