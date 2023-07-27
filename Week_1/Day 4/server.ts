// Import express
import express from "express";
// Create a server application
const app = express();
// Store the port number in a var
const port = 3001;
 
// // Attach a function to the route "/"
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
 

// // Attach a function to the route "/"
// app.get("/two", (req, res) => {
//     res.send("Hello world two!");
//   });


// Tell the server to start listening, we provide the port here as first argument.
// The second argument is a function that runs as soon as the server starts. We use it to log the port number.
app.listen(port, () => console.log(`⚡ Listening on port: ${port}`));

//Json Part

// Attach a function to the route "/"
app.get("/jsonTest", (req, res) => {
    const foo = { id: 7, name: "Haoming", age: 34};
    res.send(foo);
});

// const person = {
//     name: "Richard",
//     hobbies: "Drums",
//     grades: [7, 10, 3]
//   };

//   const stringVersion = JSON.stringify(person);