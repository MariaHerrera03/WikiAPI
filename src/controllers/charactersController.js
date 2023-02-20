const characterService = require('../services/characterService');
const Character = require('../database/Model')

const getAllCharacters = (req, res) => {
    Character.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
        // console.log(result)
    })
};

const getOneCharacter = (req, res) => {
    const { characterId }= req.params;

    if (!characterId) {
        return;
    }

    Character.findById(characterId, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
        // console.log(result);
    })
};

const createNewCharacter = (req, res) => {
    const { body } = req;

    if(
        !body.characterName ||
        !body.characterAnime ||
        !body.characterState ||
        !body.characterAge ||
        !body.characterSpecies ||
        !body.characterOccupation
    ) {
        return;
    }
    const newCharacter = {
        characterName: body.characterName,
        characterAnime: body.characterAnime,
        characterState: body.characterState,
        characterAge: body.characterAge,
        characterSpecies: body.characterSpecies,
        characterOccupation: body.characterOccupation
    }
    
    const createdCharacter = characterService.createNewCharacter(newCharacter);
        res.status(201).send({ status: 'New', data: createdCharacter });
};

const updateOneCharacter = (req, res) => {
    const {
        body,
        params: { characterId },
    } = req;

    if (!characterId) {
        return;
    }

    const  updatedCharacter = characterService.updateOneCharacter(characterId, body);
    res.send({ status: 'Updated', data: updatedCharacter });
};

const deleteOneCharacter = (req, res) => {
    const {
        params: { characterId },
    } = req;

    if (!characterId) {
        return;
    }

    characterService.deleteOneCharacter(characterId);
    res.status(204).send({ status: 'Deleted' });
};

module.exports = {
    getAllCharacters,
    getOneCharacter,
    createNewCharacter,
    updateOneCharacter,
    deleteOneCharacter
};