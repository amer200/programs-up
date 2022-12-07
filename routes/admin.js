const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');

route.get('/', adminController.getMain);
route.post('/add-new-articel', adminController.AddNewArticale);

module.exports = route;