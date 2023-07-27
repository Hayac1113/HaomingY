// Feature 6 - Create a client
// Create a new file named client.ts. When running this file it should use Axios to make an HTTP GET request to the route from feature 5. When you run the file, it should log just the message the server sends back ("Hello from Server!").

// Tip: We only want to see the string "Hello from Server!", not the whole response

import axios from "axios";
 
const helloServer = async () => {
const response = await axios.get("http://127.0.0.1:3001/hello");
console.log(response.data);
};
 
helloServer();