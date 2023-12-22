import express from 'express';
import admin_controller from '../controllers/admin_controller.js';

const router = express.Router();

router.post('/', admin_controller.adminLogIn);

export default router;