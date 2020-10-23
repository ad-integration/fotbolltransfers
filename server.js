const fs = require('fs')
const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

app.get('/', async (req, res) => res.send(fs.readFileSync('views/index.html', 'utf8')))
app.get('/sponsrat/:id', async (req, res) => res.send(fs.readFileSync('views/article.html', 'utf8')))

app.use(express.static('./public', { 
    maxAge: 60 * 60 * 1000,
    setHeaders: (res) => {
        res.set('Access-Control-Allow-Origin', '*')
    }
}))

server.listen({ 
    port: process.env.PORT || 8080
}, () => { 
    console.log('Running on http://localhost:' + server.address().port) 
})
