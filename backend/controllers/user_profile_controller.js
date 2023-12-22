import { User } from '../models/users_model.js';

const user_profile_controller = {
    getUserProfile: async (request, response) => {
        try {
            const { id } = request.params;
            const user = await User.findById(id).populate('events');
            response.json(user);
          } catch (error) {
            response.status(500).json({ message: error.message });
          }
      },
}

export default user_profile_controller
