import axios from "axios";

// const url = `http://13.204.46.236:5000/api`; //dev 
const url = `/api`; //proxy

const httpClient = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json", 
    },
  });

export default httpClient;
