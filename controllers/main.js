const Categ = require('../models/categ');
const Aritcal = require('../models/article');

exports.getMainPage = async (req, res) => {
    const categs = await Categ.find();
    const articels = await Aritcal.find();
    let slides = [articels[0], articels[1], articels[2]];
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
    let search = await Aritcal.find({ name: { $regex: new RegExp() payload, $options: 'i' } });
    // search = search.slice(0, 10);
    res.send({
        payload: search
    })
}