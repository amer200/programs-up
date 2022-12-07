const Aritcal = require('../models/article');
exports.getMain = (req, res) => {
    res.render('admin/index');
}
exports.AddNewArticale = (req, res) => {
    const title = req.body.title;
    const img = req.file.path.split('public')[1];
    const content = req.body.content;
    const categ = req.body.categ;
    const articel = new Aritcal({
        title: title,
        img: img,
        content: content
    })
}