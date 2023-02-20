const express = require('express');
const charactersController = require('../../controllers/charactersController');

const router = express.Router();

router
    .get('/', charactersController.getAllCharacters)
    .get('/:characterId', charactersController.getOneCharacter)
    .post('/', charactersController.createNewCharacter)
    .patch('/:characterId', charactersController.updateOneCharacter)
    .delete('/:characterId', charactersController.deleteOneCharacter);

module.exports = router;