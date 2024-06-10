const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Utiliser l'URI MongoDB depuis le fichier .env
const mongoURI = process.env.MONGODB_URL;

if (!mongoURI) {
  console.error('L\'URI de connexion MongoDB (MONGODB_URL) n\'est pas définie. Assurez-vous qu\'elle est définie dans le fichier .env.');
  process.exit(1);
}

console.log('URI de connexion MongoDB :', mongoURI);

mongoose.connect(mongoURI) // Supprimer les options dépréciées
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur http://localhost:${port}`);
});
