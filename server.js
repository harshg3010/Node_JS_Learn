// functions in javascript

// 1. 

// function add(a, b){
//      return a + b;
// }

// var result = add(2, 39);     // function calling
// console.log(result);

// 2.

// var add = function(a,b){
//     return a+b;
// }

// 3.

/// var add = (a,b) =>{ return a + b};

// 4.
//  var add = (a,b) => a+b;

// var result = add(2, 51);
// console.log(result);

// 5. // fuction hwish is running while writing 

// (function(){
//     console.log("There is a new way to write function")          // ()()
// })();

function callback(){
    console.log('callback function is called by first function or main function after the execution of first function');
}

const add = function(a,b,callback){
    var result = a+b;
    console.log("result is : " + result);
    callback();
}

// add(5, 6,callback);

// add(2,3, function(){
//     console.log("function called after main function");
// });


add(2,3, () => console.log("function called "));                  // --> very important

