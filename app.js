const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('views', (__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res, next) {
    res.render('index')
})
app.listen(port, () => {console.log(`super-giggle listening on port : ${port}`)})