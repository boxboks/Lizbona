const express = require('express')

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cenzor'
})

const app = express()
const port = 3000

connection.connect()
app.use(express.static(__dirname + "/public"))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/html/strona_glowna.html")     
})

app.get('/comments', (req, res) => {
//   res.send('Hello World!')
  connection.query("select * from comments", (err, rows, fields) =>{
    res.json(JSON.parse(JSON.stringify(rows)))
  });
})
app.post('/addComment', (req, res) => {
  connection.query("insert into comments(author, text, date) values (?, ?, ?)", 
  [req.body.author, req.body.text, new Date().toISOString()]
  , (err, rows, fields) =>{
    res.status(200)
  });
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})