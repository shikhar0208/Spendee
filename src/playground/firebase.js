import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA_QLIuXPfxgV5DASpmxLwnsQ2bpKOdvs8",
  authDomain: "spendee-72c71.firebaseapp.com",
  databaseURL: "https://spendee-72c71.firebaseio.com",
  projectId: "spendee-72c71",
  storageBucket: "spendee-72c71.appspot.com",
  messagingSenderId: "122524442614",
  appId: "1:122524442614:web:fb9c152cc3b8e12317b1d7",
  measurementId: "G-YHQZQ22EBZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Give access to database methods
const database = firebase.database()

database.ref().set({             
  name: 'Shikhar Rastogi',
  age: 20,
  location: {
    city: 'Delhi',
    country: 'India'
  }
}).then(()=> {
  console.log('Data is saved')
}).catch((error) => {
  console.log('This failed', error)
})     

//set can also take any data types we can store inside a firebase.
// database.ref().set('This is my data') 

// to update age we have pass argument to ref-reference (default: root) i.e. ref('age') 
database.ref('age').set(21)

database.ref('location/city').set('New Delhi')    // ref to loaction->city

// setting a new key:value object as attributes inside existing db
database.ref('attributes').set({
  height: 68,
  weight: 65
}).then(() => {
  console.log('New field is added.')
}).catch((e) => {
  console.log('Failed', e)
})

// Removing data (isSingle attrib) from dataBase
database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Remove succeeded');
  }).catch((e) => {
    console.log('Remove failed', e);
  })

// Removing data using set
database.ref('isSingle').set(null);   //equivalent to remove  

// Updating data
database.ref().update({   //update always call with an object.
  name: "Mike",
  age: 23,
  job: 'Software developer',  
  isSingle: null
}).then(() => {
  console.log('Successfully updated values')
}).catch((e) =>{
  console.log('Failed to update')
})

database.ref().update({
  'job/company': 'Amazon',
  'location/city': 'Seattle'
})

// To fetch all the data from database
database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  }).catch((e) => {
    console.log('Error fetching data', e)
  })

// To fetch only location data from database
database.ref('location')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  }).catch((e) => {
    console.log('Error fetching data', e)
  })

// "on" - also fetches data but it allows us to listen for something over and over again
const onValueChange = database.ref()
.on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(val);
}, (e) => {             // 3rd argument can be passed as callback func to handle the error(optional)
  console.log('Error with data fetching', e);
});   

setTimeout(() => {
  database.ref('age').set(21)
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange)    // this will close the given subscription without affect other subscription 
}, 7000);                               // and not notify the further changes

setTimeout(() => {
  database.ref('age').set(23)   // the change is made in database but it is not notified on console or other
}, 10500);


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
  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
  
  });
  
  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });