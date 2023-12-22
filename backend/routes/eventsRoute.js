import express from 'express';
import eventController from '../controllers/event_controller.js';

const router = express.Router();

// Routes for the events resource
router.post('/', eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

export default router;