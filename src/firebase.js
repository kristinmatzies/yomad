import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: 'AIzaSyBvvc8YF-RlR2drpVInvzG96uqWk_9JGTQ',
  authDomain: 'yomad-2e8f7.firebaseapp.com',
  databaseURL: 'https://yomad-2e8f7.firebaseio.com',
  projectId: 'yomad-2e8f7',
  storageBucket: 'yomad-2e8f7.appspot.com',
  messagingSenderId: '703292709962',
  appId: '1:703292709962:web:6235def91788e9af039ab3',
  measurementId: 'G-03RVWRJ6MB',
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const storage = firebase.storage()
