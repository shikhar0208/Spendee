import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database()

export { firebase, database as default };



// database.ref().set({             
//   name: 'Shikhar Rastogi',
//   age: 20,
//   // isSingle: false,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United state'
//   }
// }).then(()=> {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('This failed', error)
// })     

// Removing data (isSingle attrib) from dataBase
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Remove succeeded');
//   }).catch((e) => {
//     console.log('Remove failed', e);
//   })

// Removing data using set
// database.ref('isSingle').set(null);   //equivalent to remove  

// // Updating data
// database.ref().update({   //update always call with an object.
//   name: "Mike",
//   age: 23,
//   job: 'Software developer',  
//   isSingle: null
// }).then(() => {
//   console.log('Successfully updated values')
// }).catch((e) =>{
//   console.log('Failed to update')
// })

// database.ref().update({
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// To fetch all the data from database

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   })

// // To fetch only location data from database
// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().on(
//   "value",
//   snapshot => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// Handling array data using firebase 

// database.ref('notes').push({    // push automatically generates id for your individual note 
//   title: 'Course Topics',
//   body: 'React'
// });

// database.ref('notes/-M2mZLwvkBy9_OZ6qlgl').remove()   // removing data using id genrated by push()

// database.ref('expenses').push({
//   description: 'Rent',
//   note: "last month",
//   amount: 5000,
//   createdAt: 8
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,     // key is function on snapshot
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,     // key is function on snapshot
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });  

// New subscriber
// child_removed    -> event   
// subscriber listening on expenses for every single time a child is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())

// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });