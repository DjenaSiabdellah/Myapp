//imports
const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'));

// Example for other olders

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Navigation
app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})



//listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))