import express from 'express';
import user_profile_controller from '../controllers/user_profile_controller.js'

const router = express.Router();

router.post('/:id', user_profile_controller.getUserProfile);

export default router;