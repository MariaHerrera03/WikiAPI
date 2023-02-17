const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/WorkoutAPI')
    .then(() => console.log('🚀 The conection is okay'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => { console.log(`🚀 Server listening on port ${PORT}`) });