import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBUY3K98-w9LJCYpwuLQiZ_4UubW2sQqMs",
  authDomain: "fun-food-a1ed3.firebaseapp.com",
  databaseURL: "https://fun-food-a1ed3.firebaseio.com",
  projectId: "fun-food-a1ed3",
  storageBucket: "fun-food-a1ed3.appspot.com",
  messagingSenderId: "720525676070"
};
firebase.initializeApp(config);

export default firebase;
