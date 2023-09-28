//Axios Setup - for communication with backend, you can use Fetch as well
import axios from "axios";

// Server Client
const client = axios.create({baseURL: process.env.REACT_APP_API_URL}); //Azure IP

//Dev Client
//const client = axios.create({baseURL: 'http://localhost:3000/api'});

export default client;