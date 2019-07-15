const express = require('express')
const Student = require('../models/student')

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
    Student.find({}, (err, data) => {
        if (err) next(err)

        console.log('data:', data)
        res.render('index.html', {
            Student: data
        })
    })
})

router.get('/student', (req, res) => {
    res.send('login')
})

module.exports = router