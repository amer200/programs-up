const express = require('express');
const route = express.Router();
const mainController = require('../controllers/main');

route.get('/', mainController.getMainPage);
route.get('/art/:id', mainController.getArtical);
route.post('/get-search-result', mainController.Search)
module.exports = route;