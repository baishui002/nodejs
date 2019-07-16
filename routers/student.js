const express = require('express')
const Student = require('../models/student')
const User = require('../models/user')

const router = express.Router()

router.get('/', (req, res, next) => {
    // res.render('index.html', {
    //     students: [
    //         {nickName: 'baishui', email: '123@13.com'},
    //         {nickName: 'baishui', email: '123@13.com'},
    //         {nickName: 'baishui', email: '123@13.com'},
    //         {nickName: 'baishui', email: '123@13.com'}
    //     ]
    // })
    Student.find((err, data) => {
        if (err) next(err)

        console.log('data:1', data)
        res.render('index.html', {
            students: data
        })
    })
})

router.get('/student', (req, res) => {
    res.send('login')
})

module.exports = router