import axios from "axios";

// const url = `http://65.0.91.137:5000/api`; //dev 
const url = `/api`; //proxy

const httpClient = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json", 
    },
  });

export default httpClient;
