const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');

route.get('/', adminController.getMain);
route.post('/add-new-articel', adminController.AddNewArticale);
route.post('/add-categ', adminController.AddCateg);
route.post('/add-file', adminController.addNewFile);
route.get('/remove-file/:id', adminController.removeFile);
module.exports = route;