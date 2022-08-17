const permissionRouter = require('express').Router();
const PermissionController = require('../controllers/permission.controller');

permissionRouter.post('/', PermissionController.add);
permissionRouter.put('/:id', PermissionController.update);
permissionRouter.delete('/:id', PermissionController.remove);

module.exports = permissionRouter