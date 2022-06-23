const routes = require('express').Router();
const taskController = require('../Controller/taskController');

routes.get("/home", taskController.home);
routes.post('/create', taskController.InserindoNoBD);

routes.get('/GetById/:id', taskController.GetById);
routes.post('/EditarDados/:id', taskController.EditarDados);

routes.get('/ConfimDelete/:id', taskController.ConfirmDeleteTarefa);
routes.get('/Delete/:id', taskController.DeleteTarefa)

module.exports = routes;