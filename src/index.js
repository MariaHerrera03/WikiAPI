const express = require('express');
const v1CharacterRouter = require('./v1/routes/charactersRoutes');
const bodyParser = require('body-parser');
const cors = require("cors")
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/WikiAPI')
    .then(() => console.log('🚀 The conection is okay'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/characters', v1CharacterRouter);

app.listen(PORT, () => { console.log(`🚀 Server listening on port ${PORT}`) });