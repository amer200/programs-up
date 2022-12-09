const Categ = require('../models/categ');
const Aritcal = require('../models/article');
const File = require('../models/file');
const fs = require('fs');
exports.getMain = async (req, res) => {
    const categs = await Categ.find();
    const files = await File.find();
    const articels = await Aritcal.find();
    res.render('admin/index', {
        categs: categs,
        files: files,
        articels: articels
    });
}
exports.AddNewArticale = (req, res) => {
    const title = req.body.title;
    const img = req.file.path.split('public')[1];
    const content = req.body.content;
    const categ = req.body.categ;
    const articel = new Aritcal({
        title: title,
        img: img,
        content: content,
        categ: categ
    })
    articel.save()
        .then(a => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.AddCateg = (req, res) => {
    const name = req.body.name;
    const categ = new Categ({
        name: name
    })
    categ.save()
        .then(c => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.addNewFile = (req, res) => {
    const path = req.file.path.split('public')[1];
    const name = req.body.name;

    const file = new File({
        name: name,
        path: path
    })

    file.save()
        .then(f => {
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err)
        })
}
exports.removeFile = (req, res) => {
    const id = req.params.id;
    File.findByIdAndRemove(id)
        .then(f => {
            fs.unlink(`public${f.path}`, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                msg: 'ok'
            })
        })
        .catch(err => {
            console.log(err)
        })
}