import axios from "axios";

const url = "/api"; //proxy

const httpClient = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json", 
    },
  });

export default httpClient;
