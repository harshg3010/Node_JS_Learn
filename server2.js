// var fs = require('fs');
// var os  = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + "!\n", ()=>{
//     console.log("File is created");
// })

// const notes = require('./notes.js');    // we import the notes.js file
// console.log('server file is available ');
// var age = notes.age;
// console.log(age);
// var add = notes.addNumber(4,5);
// console.log(add);


var _ = require('lodash');
// console.log(_);

// var arrr = ['person', 1, 3, 4.89, 5, 1, 'person', "person", 'Person', 1, 2, 3];
// var filter = _.uniq(arrr);
// console.log(filter);

console.log(_.isString(true));
