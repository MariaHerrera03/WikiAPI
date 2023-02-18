const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    name: {
        type: String},
    mode: {
        type: String},
    equipment: {
        type: Array},
    exercises: {
        type: Array},
    createdAt: {
        type: String},
    updatedAt: {
        type: String},
    trainerTips: {
        type: Array}
});

module.exports = mongoose.model('Workout', WorkoutSchema);