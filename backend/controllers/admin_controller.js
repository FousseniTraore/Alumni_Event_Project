import { User } from "../models/users_model.js";
// import jwt from 'jsonwebtoken';

const admin_controller = {
  adminLogIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Check if the user has the "admin" role
      if (user.role !== "admin") {
        return res
          .status(403)
          .json({ message: "Access forbidden. Admin privileges required." });
      }

      const token = user.generateAuthToken();

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
};

export default admin_controller;
