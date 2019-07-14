const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/student', { useNewUrlParser: true }, () => {
    console.log('mongo connected succesfully...')
})

module.exports = mongoose