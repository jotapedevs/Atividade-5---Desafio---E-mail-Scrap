const nodemailer = require('nodemailer');

async function sendEmail(to, content) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha',
    },
  });

  const mailOptions = {
    from: 'seu-email@gmail.com',
    to,
    subject: 'Resultado do Scraping',
    text: content,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
