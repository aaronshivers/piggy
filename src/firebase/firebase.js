import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBHMbcTbDjzmVv0rj8pkSG8xKvuASwacFU",
  authDomain: "expensify-146d1.firebaseapp.com",
  databaseURL: "https://expensify-146d1.firebaseio.com",
  projectId: "expensify-146d1",
  storageBucket: "",
  messagingSenderId: "131842579292",
  appId: "1:131842579292:web:8169fb55d1e6258b"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

database.ref().set({
  name: 'Bob Jenkins',
  age: 233,
  isAlive: true,
  location: {
    city: 'Austin',
    state: 'Texas'
  }
})

// database.ref().set('this is some data')

database.ref('age').set(71)

database.ref('location/city',).set('Houston')

database.ref('attributes').set({
  height: 56,
  weight: 333
})

console.log('Data Change Request Made')