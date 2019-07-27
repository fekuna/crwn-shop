import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCKJ0gyDVzTxqN-gaywPZD2xW89BG4-kkw',
	authDomain: 'crwn-db-154d4.firebaseapp.com',
	databaseURL: 'https://crwn-db-154d4.firebaseio.com',
	projectId: 'crwn-db-154d4',
	storageBucket: '',
	messagingSenderId: '357453210876',
	appId: '1:357453210876:web:507ecc3128f6d87e'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
