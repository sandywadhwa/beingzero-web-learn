var mongoose = require('mongoose');

var stopstalkUserSchema = new mongoose.Schema({
    handle: {type:String, required:true, unique:true}, // We can also specify reg exp
}, {
    timestamps: true
});

module.exports = mongoose.model('stopstalkuser', stopstalkUserSchema);
