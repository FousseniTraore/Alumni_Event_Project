import { Event } from '../models/events_models.js';

const eventController = {
  createEvent: async (request, response) => {
    try {
        if (
          !request.body.title ||
          !request.body.description ||
          !request.body.category ||
          !request.body.location ||
          !request.body.date
        ) {
          return response.status(400).send({
            message: 'Send all required fields: title, description, category',
          });
        }
        const newEvent = {
          title: request.body.title,
          description: request.body.description,
          category: request.body.category,
          location: request.body.location,
          date: request.body.date,
          // createdBy: request.user._id, // Associate the event with the logged-in user 
        };
    
        const event = await Event.create(newEvent);
    
        return response.status(201).send(event);
      } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },

  getAllEvents: async (request, response) => {
    try {
        const events = await Event.find({});
    
        return response.status(200).json({
          count: events.length,
          data: events,
        });
      } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },

  getEventById: async (request, response) => {
    try {
        const { id } = request.params;
        const event = await Event.findById(id);
    
        return response.status(200).json(event);
      } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },

  updateEvent: async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.category
        ) {
          return response.status(400).send({
            message: 'Send all required fields: title, description, category',
          });
        }
    
        const { id } = request.params;
    
        const result = await Event.findByIdAndUpdate(id, request.body);
    
        if (!result) {
          return response.status(404).json({ message: 'Event not found' });
        }
    
        return response.status(200).send({ message: 'Event updated successfully' });
      } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },

  deleteEvent: async (request, response) => {
    try {
        const { id } = request.params;
    
        const result = await Event.findByIdAndDelete(id);
    
        if (!result) {
          return response.status(404).json({ message: 'Event not found' });
        }
    
        return response.status(200).send({ message: 'Event deleted successfully' });
      } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },
};

export default eventController;
