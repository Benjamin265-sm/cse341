const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.tiongeRoute);
routes.get('/benjamin', lesson1Controller.benjaminRoute);
routes.get('/ekari', lesson1Controller.ekariRoute);

module.exports = routes;