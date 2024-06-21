const axios = require('axios');

// Função para obter uma imagem de gato aleatória da API
async function getCatImage() {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const catData = response.data[0]; // A API retorna um array, pegamos o primeiro item

        return catData.url;
    } catch (error) {
        console.error('Erro ao obter imagem de gato:', error.message);
        return null;
    }
}

module.exports = {
    getCatImage: getCatImage
};
