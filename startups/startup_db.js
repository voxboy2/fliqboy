const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb://localhost/makeup')
    .then(()=> console.log('connected to makeup'))
}