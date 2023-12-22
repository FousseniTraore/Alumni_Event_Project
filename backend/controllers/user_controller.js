import { User } from "../models/users_model.js";

const userController = {
  createUser: async (request, response) => {
    try {
      if (
        !request.body.firstName ||
        !request.body.lastName ||
        !request.body.email ||
        !request.body.password ||
        !request.body.password_repeat
      ) {
        return response.status(400).send({
          message: "Send all required fields",
        });
      }

      // Password Matching Validation
      if (request.body.password !== request.body.password_repeat) {
        return response.status(400).send({
          message: "Passwords do not match",
        });
      }

      // Email Format Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(request.body.email)) {
        return response.status(400).send({
          message: "Invalid email format",
        });
      }

      // Password Strength Validation
      const minPasswordLength = 8;
      if (request.body.password.length < minPasswordLength) {
        return response.status(400).send({
          message: `Password must be at least ${minPasswordLength} characters long`,
        });
      }
      const newUser = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
        password_repeat: request.body.password_repeat,
        role:'user',
      };

      const user = await User.create(newUser);

      return response.status(201).send(user);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },

  getAllUsers: async (request, response) => {
    try {
      const users = await User.find({});

      return response.status(200).json({
        count: users.length,
        data: users,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },
 
  getUserById: async (request, response) => {
    try {
      const { id } = request.params;
      const user = await User.findById(id);

      return response.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },

  updateUser: async (request, response) => {
    try {
      if (
        !request.body.firstName ||
        !request.body.lastName ||
        !request.body.email ||
        !request.body.password ||
        !request.body.password_repeat
      ) {
        return response.status(400).send({
          message: "Send all required fields: title, description, category",
        });
      }

      const { id } = request.params;

      const result = await User.findByIdAndUpdate(id, request.body);

      if (!result) {
        return response.status(404).json({ message: "User not found" });
      }

      return response
        .status(200)
        .send({ message: "User updated successfully" });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },

  deleteUser: async (request, response) => {
    try {
      const { id } = request.params;

      const result = await User.findByIdAndDelete(id);

      if (!result) {
        return response.status(404).json({ message: "User not found" });
      }

      return response
        .status(200)
        .send({ message: "User deleted successfully" });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },
};

export default userController;
