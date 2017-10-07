const express = require('express') /*เก็บตัวแปรไว้ชื่อexpress*/
const {twig} = require('twig')

const app = express()

app.set('view engine','twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/',homeController.index)
app.get('/news',newsController.index)

app.use('/assets',express.static(__dirname + '/static/assets',{
  maxAge: 86400000
}))


// app.get('/',function(req, res) { /*ให้แอพไปรันฟังชั่นที่เรารับมา*/
//   res.send('HELLO')
// })
//
// app.get('/home',function(req, res) {
//   res.send('HOME')
// })


app.listen(8000,function(err) { /*ตัวเอกเพรสเอาไว้ทำเวบเซิฟเว่อ*/
  console.log('Server is running on port 8000')
})
