import { User } from '../models/users_model.js';
import jwt from 'jsonwebtoken';

const auth_controller = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ userId: user._id }, "DJHEYUD783FEUFEI", {
        expiresIn: '1h', // You can adjust the expiration time
      });

      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

export default auth_controller;
