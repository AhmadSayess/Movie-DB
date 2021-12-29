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


app.get('/hello/:id', (req, res) => {
  let id = req.params.id
    res.send({status:200, message:"hello", id}
    )
  })


  app.get('/search', (req, res) => {
    let s = req.query.s

    if(s){
      res.send({status:200, message:"ok", s}
      )}
      else {
        res.send({status:500, error:true, message:"you have to provide a search"})
      }
    })


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})