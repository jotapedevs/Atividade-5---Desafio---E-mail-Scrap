const axios = require('axios');
const cheerio = require('cheerio');

async function scraper(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Exemplo: Pegar o título da página e o primeiro parágrafo
    const title = $('title').text();
    const paragraph = $('p').first().text();

    return `Título: ${title}\nParágrafo: ${paragraph}`;
  } catch (error) {
    console.error('Erro ao realizar scraping:', error);
    throw error;
  }
}

module.exports = scraper;
