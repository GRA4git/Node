const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Yeeeee')
})
app.listen(port,() => {
console.log('VVVVVVVV')
})