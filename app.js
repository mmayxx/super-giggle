const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const $_data = require('./Particulars/Data')

app.set('views', (__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res, next) {
    res.render('index', {Data_: $_data['Data']})
})
app.get('/:id', function(req, res, next) {
    $_params = req.params.id
    res.render('resp', { id_ : $_params})
})
app.listen(port, () => {console.log(`super-giggle running on port : ${port}`)})