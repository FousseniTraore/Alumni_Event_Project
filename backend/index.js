import express from 'express'
import mongoose from 'mongoose'
import {PORT, mongoDBURL} from './config.js'
import eventsRoute from './routes/eventsRoute.js'
import usersRoute from './routes/usersRoute.js'
import authRoute from './routes/authRoute.js'
import adminRoute from './routes/adminRoute.js'
import user_profile_route from './routes/user_profile_route.js'
import cors from 'cors';

const app = express();
app.use(express.json()); // for parsing application/json

app.use(cors());

app.get('/', (request, response) => {
    return response.status(234).send('Welcome');
});


app.use('/events', eventsRoute);
app.use('/users', usersRoute);
app.use('/auth', authRoute);
app.use('/adminAuth', adminRoute);
app.use('/profile', user_profile_route);


// Connect to MongoDB database using Mongoose
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });