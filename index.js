const express = require('express')
const __route = express()
const port = 3000
const ejs = require("ejs");


// Initialize
__route.set('view engine', 'ejs');

__route.use("/",  (req,res)=> {
    res.render(`${__dirname}/html/index.ejs`)
})

__route.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })