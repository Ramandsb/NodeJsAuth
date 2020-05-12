const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const boom = require('express-boom')

const app = express()


app.get('/api', (req,res) => {
    res.json({
        success: 1,
        message: 'api running successfully'
    })
})

app.listen(3000, () => {
    console.log('Server up and running')
})