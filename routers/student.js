const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html')
})

router.get('/student', (req, res) => {
    res.send('login')
})

module.exports = router