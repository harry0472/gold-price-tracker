var admin = require("firebase-admin");

var serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://gold-price-tracker-8a443.firebaseio.com'
});

const db = admin.firestore();

module.exports = db;
