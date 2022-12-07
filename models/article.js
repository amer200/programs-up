const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: String,
    img: String,
    content: String,
    categ: { type: mongoose.Schema.Types.ObjectId, ref: 'Categ' }
})

module.exports = mongoose.model('Articale', articleSchema);