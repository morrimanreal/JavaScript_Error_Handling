"use strict";
// TODO: Enable strict mode

// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  try {
    //attempt this code. If an error comes up, send it to the catch block
    return JSON.parse(data); 
  } catch(err) {
    // we take the caught error, and print it out
    console.error(err);
    return null;
  }
  
  
  // TODO: if an exception is raised
  // print the error to the console
  // and return null
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
