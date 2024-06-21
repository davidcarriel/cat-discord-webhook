const { getCatImage } = require('./getPhoto'); // Importa a função getCatImage de getPhoto.js

// Função para construir o objeto embed com a imagem de gato
async function buildCatEmbed() {
    const catImageUrl = await getCatImage();

    if (!catImageUrl) {
        return null; // Se não conseguir obter a imagem, retorna null
    }

    const now = new Date();
    const hour = now.getHours();
    let period = '';
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Bom dia!";
        period = 'Dia'
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tarde!";
        period = 'Tarde'
    } else {
        greeting = "Boa noite!";
        period = 'Noite'
    }

    const embed = {
        title: `Gatinho do ${period} 🐱`,
        description: `${greeting} São ${now.toLocaleTimeString()}. Apreciem essa fofura!`,
        color: 0xFFA500, // Cor laranja (pode alterar conforme preferir)
        image: {
            url: catImageUrl
        },
        author: {
            name: "TheCatAPI",
            url: "https://thecatapi.com/",
            icon_url: "https://cdn2.thecatapi.com/images/ar3.jpg" // Ícone opcional para o autor
        },
        footer: {
            text: "WebHook Made By Price",
            icon_url: "https://example.com/cat_icon.png" // Ícone do rodapé (altere conforme necessário)
        },
        timestamp: now.toISOString()
    };

    return embed;
}

module.exports = {
    buildCatEmbed: buildCatEmbed
};
