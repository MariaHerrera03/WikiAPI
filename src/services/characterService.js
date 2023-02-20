const { uuid } = require('uuid');
const Character = require('../database/Model');

const getAllCharacters = () => {
    const allCharacters = Character.getAllCharacters();
    return allCharacters; 
};

const getOneCharacter = (characterId) => {
    const uniqueCharacter = Character.getOneCharacter(characterId);
    return uniqueCharacter;
};

const createNewCharacter = (newCharacter) => {
    const characterToInsert = {
        ...newCharacter,
        characterId: uuid()
    }
    const createdCharacter = Character.createNewCharacter(characterToInsert);
    return createdCharacter
};

const updateOneCharacter = (characterId, changesCharacter) => {
    const updatedCharacter = Character.updateOneCharacter(characterId, changesCharacter);
    return updatedCharacter;
};

const deleteOneCharacter = (characterId) => {
    Character.deleteOneCharacter(characterId);
};

module.exports = {
    getAllCharacters,
    getOneCharacter,
    createNewCharacter,
    updateOneCharacter,
    deleteOneCharacter
};