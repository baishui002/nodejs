const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, () => {
    console.log('mongo connected succesfully...')
})

module.exports = mongoose