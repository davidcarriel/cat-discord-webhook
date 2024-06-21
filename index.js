require('dotenv').config();
const axios = require('axios');
const url = process.env.DISCORD_WEBHOOK_KEY;

const dataPromise = require('./data.js');

async function sendData() {
    try {
        const data = await dataPromise;

        if (!data) {
            console.error('Dados retornados de data.js são inválidos ou vazios.');
            return;
        }

        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Mensagem enviada com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao enviar os dados:', error.response ? error.response.data : error.message);
    }
}

sendData();