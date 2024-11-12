const express = require('express');
const cors = require('cors');
const scraper = require('./scraper');
const sendEmail = require('./email');

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());

app.post('/scrap', async (req, res) => {
  const { url, email } = req.body;
  try {
    const data = await scraper(url);
    await sendEmail(email, data);
    res.json({ message: 'Scraping realizado e e-mail enviado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar scraping ou enviar e-mail.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
