const roleRouter = require('express').Router();
const RoleController = require('../controllers/role.controller');

roleRouter.post('/', RoleController.add);
roleRouter.put('/:id', RoleController.update);

module.exports = roleRouter;