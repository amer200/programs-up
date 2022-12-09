const Categ = require('../models/categ');
const Aritcal = require('../models/article');

exports.getMainPage = async (req, res) => {
    const categs = await Categ.find();
    res.render('main/index', {
        categs: categs
    });
}