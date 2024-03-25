const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'mail.openjavascript.info', // Utilisez le service Gmail ou configurez un autre service SMTP
  port: 465,
  auth: {
    user: 'roudanannie@gmail.com', // Votre adresse e-mail Gmail
    pass: '@Nn!e1602', // Votre mot de passe Gmail
  },
});

const envoyerEmail = (nomExpediteur, destinataire, subject, message) => {
  const mailOptions = {
    from: `roudanannie@gmail.com`,
    to: destinataire,
    subject: nomExpediteur,
    text: message,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (erreur, info) => {
    if (erreur) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', erreur);
    } else {
      console.log('E-mail envoyé :', info.response);
    }
  });
};

module.exports = { envoyerEmail };
