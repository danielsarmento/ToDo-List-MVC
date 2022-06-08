const routes = require('express').Router();
const taskController = require('../Controller/taskController');

routes.get("/home", taskController.home);

module.exports = routes;