const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    name: String,
    mode: String,
    equipment: Array,
    exercises: Array,
    createdAt: String,
    updatedAt: String,
    trainerTips: Array
});

module.exports = mongoose.model('Workout', WorkoutSchema);