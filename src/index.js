import express from 'express';
import { engine } from 'express-handlebars';

import path from 'path'
import { fileURLToPath } from 'url';

import morgan from 'morgan';

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Dùng Middle Ware
app.use(express.urlencoded({
  extended: true
})) // Xử lý dữ liệu từ FORM gửi lên cho server

app.use(express.json()) // Xử lý dữ liệu từ client gửi lên server (gửi từ dạng javascript lên)
// VD: XMLHttpRequest, fetch, axios, ajax...


// Static File
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger: xem thong bao thay doi
// app.use(morgan('combined'))

// Teamplate Engine
app.engine('.hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  // console.log(req.body)
  res.send('Hello Tin Xun!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})