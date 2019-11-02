const express = require('express')

const app = express()
 
app.get('/', (req, res) =>  {
  res.sendFile(`${__dirname}/public/index.html`)
})
app.get('/contacts', (req, res) =>  {
    res.sendFile(`${__dirname}/public/contacts.html`)
  })

app.listen(3000, '0.0.0.0', ()=>{
    console.log('Server start...')
})