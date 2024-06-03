const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios') 
const port = 8080


app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'temp/index.html'))
})
// app.get('/api',async (req, res) => {
//   let r = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=0d2ef6aa62814f528749d40b36107d39`)
//   res.json(r)
// })
app.get('/api',async (req, res) => {
    console.log(req._parsedUrl.query)
    let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
    let r = await axios(url)
    let a = await r.data
    res.json(a)
  })

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})