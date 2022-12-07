require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const port = process.env.PORT;


/************************************** */
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
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
/************************************* */
const mainRoutes = require('./routes/main');
const adminRoutes = require('./routes/admin');
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.listen(port, () => {
    console.log('app conneted on port ' + port)
})