import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCsMOFV-X8oyTXdpv7eA7ZG2QagtMRKGoE",
  authDomain: "test-4e05d.firebaseapp.com",
  databaseURL: "https://test-4e05d.firebaseio.com",
  projectId: "test-4e05d",
  storageBucket: "test-4e05d.appspot.com",
  messagingSenderId: "222230998414"
};
firebase.initializeApp(config);

export default firebase;