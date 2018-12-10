const firebase = require("firebase/app");
require("firebase/database");

class Live {
  constructor(
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
  ) {
    // again, this uses a global config which doesn't seem ideal
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    });
    this.database = firebase.database();
  }
  add(meta) {
    this.database
      .ref("songs/" + meta.filename.replace(/\..{3}$/, ""))
      .set(meta);
  }
}

module.exports = new Live(
  process.env.FIREBASE_API_KEY,
  process.env.FIREBASE_AUTH_DOMAIN,
  process.env.FIREBASE_DATABASE_URL,
  process.env.FIREBASE_PROJECT_ID,
  process.env.FIREBASE_STORAGE_BUCKET,
  process.env.FIREBASE_MESSAGING_SENDER_ID
);
