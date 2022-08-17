const userRouter = require('express').Router();
const UserController = require('../controllers/user.controller');

userRouter.post('/', UserController.add);
userRouter.put('/:id', UserController.update);
userRouter.get('/:id', UserController.lookup)
userRouter.get('/', UserController.lookup)

module.exports = userRouter;