const routes = require('express').Router();
const taskController = require('../Controller/taskController');

routes.get("/home", taskController.home);
routes.post('/create', taskController.InserindoNoBD);


module.exports = routes;