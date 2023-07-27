import axios from "axios";

// const response =  axios.get("http://127.0.0.1:3001/two");

// console.log(response);


// With async function:
// const getTwo = async () => {
//     const response = await axios.get("http://127.0.0.1:3001/two");
//     console.log(response.data);
// };

// getTwo();

const getJsonData = async () => {
    const response = await axios.get("http://127.0.0.1:3001/jsonTest");
    const receiveData = response.data;
    console.log(receiveData.data);
};

getJsonData();