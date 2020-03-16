
// Object Destructuring 

// const Person = {
//     name: "Shikhar",
//     age: 26,
//     location: {
//         city: 'Delhi',
//         temp: 20
//     }
// };

// // Object destructuring

// // setting up default value for name with renaming it 
// const { name: firstName = 'Annonymous', age, location } = Person

// // key: new_key_name
// const {city, temp: temperature} = location

// console.log(`${firstName} is ${age} years old.`);

// if(city && temperature) {
//     console.log(`It is ${temperature} degree temperature in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { title, author, publisher } = book
// const {name: publisherName = 'Self-Published'} = publisher

// console.log(publisherName)


//  Array Destructuring 

// const address = ['1299 S Juniper Street', 'Philadelfia', 'Pennsylvania', '19147']

// // const [street, city, state, zip] = address      //array destructuring- match with the position

// // we can also leave value we don't want to destructure

// // const address = []

// const [, city, state='New York'] = address      // setting up default value.

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`)