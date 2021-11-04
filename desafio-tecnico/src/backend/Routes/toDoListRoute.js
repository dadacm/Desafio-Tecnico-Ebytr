const Router = require('express').Router();

const toDoController = require('../controllers/toDoContoller');


Router.post('/', toDoController.createTask);

Router.get('/', toDoController.getTasks);

module.exports = Router;
