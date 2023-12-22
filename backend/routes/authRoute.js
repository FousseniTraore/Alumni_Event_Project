import express from 'express';
import auth_controller from '../controllers/auth_controller.js';

const router = express.Router();

router.post('/', auth_controller.login);

export default router;
