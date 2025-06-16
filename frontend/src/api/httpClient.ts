import axios from "axios";

const url = "http://localhost:5000/api"; //dev

const httpClient = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json", 
    },
  });

export default httpClient;
