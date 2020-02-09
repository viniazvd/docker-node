const express = require('express')

const app = express()

app.get('/', (_req, res) => res.send({ work: true, coe: 'MANE' }))

app.listen(3000, '0.0.0.0', () => {
  console.log('sv is onlineeeeeee')
})

