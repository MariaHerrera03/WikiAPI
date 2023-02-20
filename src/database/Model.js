const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    nombre: {
        type: String},
    anime: {
        type: String},
    estado: {
        type: String},
    edad: {
        type: String},
    especie: {
        type: String},
    ocupación: {
        type: String},
});

module.exports = mongoose.model('Character', CharacterSchema);