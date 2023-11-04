const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params; //const id = req.paramas.id
        const {data} = await axios(`${URL}/${id}`);

        if (data.id) {
            const character = {
                id,
                name: data.name,
                status: data.status,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                species: data.species
            }; 

            return res.status(200).json(character);
            
        };
        return res.status(404).send('Not found'); //send para exto plano

    } catch (error) {
        return res.status(500).send(error.message);
    }
     
};

module.exports = {
    getCharById
};
























/* const axios = require("axios");

const URL_BASE = "https://rickandmortyapi.com/api";

const getCharById = (response, id) => {
    axios(`${URL_BASE}/character/${id}`)
      
        .then(({ data }) => { /
            const character = {
                id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
            return response
                .writeHead(200, { "Content-type": "application/jason" })
                .end(JSON.stringify(character));
        })
        .catch((error) => {
            return response
                .writeHead(500, { "Content-type": "text/plain" })
                .end(error.message);
        })
}

module.exports = {
    getCharById
};

 */