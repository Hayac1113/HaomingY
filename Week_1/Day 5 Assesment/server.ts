// Feature 5 - Create a server
// Create a new file named server.ts. When running the file it should start an Express server listening to HTTP request. The server needs to have one route on GET /hello that sends back the string "Hello from Server!".

import express from "express";
const app = express();
const port = 3001;
 
app.get("/hello", (req, res) => {
  res.send("Hello from the Server");
});
 
app.listen(port, () => console.log(`Server is running: ${port}`));