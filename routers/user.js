const express = require('express')
const User = require('../models/user')
const md5 = require('../controller/md5')

const router = express.Router()

router.get('/register', (req, res) => {
    res.render('register.html')
})

router.post('/register', (req, res, next) => {
    let body = req.body;

    User.findOne({
        $or: [
            {email: body.email},
            {nickName: body.nickName}
        ]
    }, (err, data) => {
        if (err) {
            // console.log(err)
            // res.json({
            //     code: 1,
            //     msg: 'server err'
            // })
            return next(err)
        }

        if (data) {
            res.json({
                code: 1,
                msg: 'email or nickName already exists'
            })
            return
        }
        body.password = md5(body.password);

        new User(body).save((err, user) => {
            if (err) return next(err)

            res.json({
                err_code: 0,
                msg: 'ok'
              })
        })
    })
})

router.get('/login', (req, res) => {
    res.render('login.html')
})


module.exports = router