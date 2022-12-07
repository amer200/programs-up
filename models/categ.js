const mongoose = require('mongoose');

const categSchema = mongoose.Schema({
    name: String,
    articals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Articale' }]
})

module.exports = mongoose.model('Categ', categSchema);