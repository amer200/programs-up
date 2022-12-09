const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: String,
    path: String
})

module.exports = mongoose.model('File', fileSchema);