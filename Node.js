const { log } = require('console');
const express = require('express');
const { start } = require('repl');
const app = express()
const port = 3001

app.get('/contacts', (req, res) => {
    res.json({
      city: "Grozny",
      street: "Trosheva",
      building: 7
    })
  })

  app.listen(port,() => {
      console.log('hhhhh');
  })