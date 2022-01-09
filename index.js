
const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send({status:200, message:"ok"}
  )
})


app.get('/time', (req, res) => {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
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
    
    if(s != null){
      res.send({status:200, message:"ok", data:s}
      )}
      else {
        res.send({status:500, error:true, message:"you have to provide a search"})
      }
    })

    const movies = [
                      { title: 'Jaws', year: 1975, rating: 8 },
                      { title: 'Avatar', year: 2009, rating: 7.8 },
                      { title: 'Brazil', year: 1985, rating: 8 },
                      { title: 'erheb kabeb', year: 1992, rating: 6.2 }
  ] 


    app.get('/movies/create', (req, res) => {
      res.send({status:200, message:"create movies"}
      )
    })

    app.get('/movies/read', (req, res) => {
      res.send({status:200, data:movies }
      )
    })

    app.get('/movies/update', (req, res) => {
      res.send({status:200, message:"update movies"}
      )
    })

    app.get('/movies/delete', (req, res) => {
      res.send({status:200, message:"delete movies"}
      )
    })


    app.get('/movies/read/by-date', (req, res) => {
      movies.sort(function (a, b) {
         return a.year - b.year
       });
       res.send({status:200, data:movies})
     })


     app.get('/movies/read/by-rating', (req, res) => {
      movies.sort(function (a, b) {
         return b.rating - a.rating
       });
       res.send({status:200, data:movies})
     })

     app.get('/movies/read/by-title', (req, res) => {
      movies.sort(function (a, b) { 
        return a.title.localeCompare(b.title)
       });
       res.send({status:200, data:movies})
     })

     app.get('/movies/read/id/:id', (req, res) => {
      let id = req.params.id
      if (id >= 0 && id < movies.length){
        res.send({status:200, data:movies[id]})
      }
      else {
        res.send({status:404, error:true, message:`the movie ${id} does not exist`})
      }
      })

      app.get('/movies/add', (req, res) => {
        const title = req.query.title
        const year = req.query.year
        const rating = req.query.rating

        if(title =="" || title == undefined  || year =="" || year == undefined || year.length != 4 || isNaN(year)){
          res.send({status:403, error:true, message:'you cannot create a movie without providing a correct title or year'}) 
        }
         else if(rating == "" ||  rating == undefined) {
          let nbr = 4;
          movies.push({ title:title, year:year, rating:nbr});
          res.send(movies);
        }
        else{
          movies.push({ title:title, year:year, rating:rating});
          res.send({ status: 200, data:movies});
        }
       })
       


       app.get('/movies/delete/:id', (req, res) => {
        let id = req.params.id

        if(id >= 0 && id < movies.length){
          movies.splice[id ,1]
          res.send({status:200, data:movies })

        }else{
          res.send({status:404, error:true, message:`the movie ${id} does not exist`})
        }
      })

      app.get("/movies/update/:id", (req, res) => {
         let id = req.params.id
         let title = req.query.title
         let year = req.query.year
         let rating = req.query.rating

        if(title != undefined && title !=""){
          movies[id].title=title
        }
        if(year != undefined && year !="" ){
          movies[id].year=year
        }
        if(rating != undefined && rating != ""){
          movies[id].rating=rating
        }
        else{
          res.send(movies[id]);
        }
      });

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})