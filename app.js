const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const $_data = require('./Particulars/Data')

app.set('views', (__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', function(req, res, next) {
    res.render('index', {Data_: $_data['Data']})
})
app.get('/:id', function(req, res, next) {
    $_params = parseInt(req.params.id) + 1
    res.render('resp', { id_ : $_params, data_ : $_data['Data'][$_params - 1]})
})
app.post('/search_credentials', function(req, res, next) {
    companies = []
    let query = req.body['s/q'].charAt(0).toUpperCase() + req.body['s/q'].toLowerCase().slice(1)
    $_result = []
    for (i = 0; i < $_data.Data.length; i++) {
        companies.push({company : $_data['Data'][i].company})
        query.length != 0 ?
        companies[i].company.includes(query) ? 
        $_result.push($_data['Data'][i])
        : 
        null // --> Error 404 not found
        :
        null// --> send recommendations
    }

    $_result.length == 0 ?
    console.log('Error 404 not found') 
    :
    console.log(`Found match(es) : ${$_result}`)
})
app.listen(port, () => {console.log(`super-giggle running on port : ${port}`)})