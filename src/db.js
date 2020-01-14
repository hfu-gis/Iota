import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDuQ9FvFR98RmcxRs6z-u2hO4ZZUsSXafo",
  authDomain: "iota-15732.firebaseapp.com",
  databaseURL: "https://iota-15732.firebaseio.com",
  projectId: "iota-15732",
  storageBucket: "iota-15732.appspot.com",
  messagingSenderId: "511740795807",
  appId: "1:511740795807:web:4f091f34289c3e6a833baa"
};
const db = firebase.initializeApp(firebaseConfig).firestore()
export default db

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }