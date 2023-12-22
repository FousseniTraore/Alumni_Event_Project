import express from 'express';
import userController from '../controllers/user_controller.js';

const router = express.Router();

// Routes for the events resource
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
export default router;