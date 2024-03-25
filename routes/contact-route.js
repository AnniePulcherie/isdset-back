const express = require('express');
const routerContact = express.Router();
const { envoyerEmail } = require('../controllers/contact'); // Importez la fonction pour envoyer l'e-mail depuis le contrôleur

// Route pour gérer les messages de contact
routerContact.post('/', async (req, res) => {
  const { nom, email, sujet, message } = req.body;

  // Envoyez l'e-mail
  envoyerEmail(nom, email, sujet, message);

  // Vous pouvez ajouter ici une réponse JSON pour indiquer que le message a été envoyé avec succès
  res.json({ message: 'Message envoyé avec succès' });
});

module.exports = routerContact;
