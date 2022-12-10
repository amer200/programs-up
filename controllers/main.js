const Categ = require('../models/categ');
const Aritcal = require('../models/article');

exports.getMainPage = async (req, res) => {
    const categs = await Categ.find();
    const articels = await Aritcal.find().populate('categ');
    let slides = [articels[articels.length - 1], articels[articels.length - 2], articels[articels.length - 3]];
    res.render('main/index', {
        categs: categs,
        articels: articels,
        slides: slides
    });
}
exports.getArtical = async (req, res) => {
    const id = req.params.id;
    const categs = await Categ.find();
    const aritcal = await Aritcal.findById(id);
    res.render('main/articale', {
        categs: categs,
        a: aritcal
    })
}
exports.Search = async (req, res) => {
    let payload = req.body.payload.trim();
    let search = await Aritcal.find({ title: { $regex: new RegExp(payload + '.*', 'i') } });
    search = search.slice(0, 10);
    res.send({
        payload: search
    })
}