const functions = require("firebase-functions");
const admin = require("firebase-admin");
const algoliaSearch = require("algoliasearch");
admin.initializeApp();
//todo POSIBLIE FUTURO ERROR EN DECARAIONE ENV
const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;
const client = algoliaSearch(APP_ID, ADMIN_KEY);
const index = client.initIndex("PROGRAMS");

exports.addToIndex = functions.firestore
  .document("Programs/{programId}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    return index.saveObject({ ...data, objectID });
  });

exports.updateIndex = functions.firestore
  .document("Programs/{programId}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({ ...newData, objectID });
  });

exports.deleteFromIndex = functions.firestore
  .document("Programs/{programID}")
  .onDelete((snapshot) => {
    index.deleteObject(snapshot.id);
  });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
