require('dotenv').config();
const axios = require('axios');
const url = process.env.DISCORD_WEBHOOK_KEY;
const schedule = require('node-schedule');

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

// Agendar execução para a manhã (por exemplo, 8:00 AM)
schedule.scheduleJob('0 8 * * *', function() {
    console.log('Executando sendData pela manhã...');
    sendData();
});

// Agendar execução para a tarde (por exemplo, 2:00 PM)
schedule.scheduleJob('0 14 * * *', function() {
    console.log('Executando sendData pela tarde...');
    sendData();
});

// Agendar execução para a noite (por exemplo, 8:00 PM)
schedule.scheduleJob('0 20 * * *', function() {
    console.log('Executando sendData pela noite...');
    sendData();
});
