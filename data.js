const embed = require('./embed');
require ('dotenv').config();

async function generateData() {
    const embedData = await embed.buildCatEmbed();

    if (!embedData) {
        console.error('Não foi possível construir o embed.');
        return null;
    }

    const data = {
        username: "gatitos",
        avatar_url: process.env.WEBHOOK_DEFAULT_PHOTO,
        embeds: [embedData]
    };

    return data;
}

module.exports = generateData();
