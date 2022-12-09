require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const port = process.env.PORT;
const db = process.env.DB_URL;

/************************************** */
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + file.originalname;
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});
const upload = multer({ storage: storage });
app.post('/admin/add-new-articel', upload.single('img'));
app.post('/admin/add-file', upload.single('file'));
/************************************* */
const mainRoutes = require('./routes/main');
const adminRoutes = require('./routes/admin');
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);

mongoose.connect(db)
    .then(resu => {
        console.log("conneted to db");
        app.listen(port, () => {
            console.log('app conneted on port ' + port)
        })
    })
    .catch(err => {
        console.log(err)
    })

