const express = require('express');
const charactersController = require('../../controllers/charactersController');

const router = express.Router();

router
    .get('/', charactersController.getAllCharacters)
    .get('/:workoutId', charactersController.getOneCharacter)
    .post('/', charactersController.createNewCharacter)
    .patch('/:workoutId', charactersController.updateOneCharacter)
    .delete('/:workoutId', charactersController.deleteOneCharacter);

module.exports = router;