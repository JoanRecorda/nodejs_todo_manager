const http = require('http')
        // The following ema script brand new modules syntax
        // will also work:
        // - import http from 'http' -

let notes = [
    {
        "id": 1,
        "content": "He de menjar anous mentre programo i a la nit només gaspatxo",
        "date": "2021-10-30T17:30:31.098Z",
        "important": true
    },
    {
        "id": 1,
        "content": "Hem de correr un cop al dia",
        "date": "2021-10-30T18:10:34.075Z",
        "important": false
    }
]

        // At response.end we'll introduce 'JSON.stringify(notes)'
        // At response.writeHead we'll have to set 'application/json'
        // instead of 'text/plain'
const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)