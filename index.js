const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send({status:200, message:"ok"}
  )
})

let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
app.get('/time', (req, res) => {
    res.send({status:200, message:`${h}:${m}`}
    )
  })


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})