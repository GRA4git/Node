
const express = require('express')
const app = express()
const port = 4000

app.get('/contacts', (req, res) => {
    res.json({
      city: "Grozny",
      street: "Trosheva",
      building: 7
    })
  })

app.listen(port, () => {
  console.log('hkdjhgkdghk')
})