import axios from "axios";

// const url = `${import.meta.env.VITE_API_BASE_URL || ""}/api`; //proxy
// const url = `http://3.108.53.210:5000/api`; //proxy
const url = `/api`; //proxy

const httpClient = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json", 
    },
  });

export default httpClient;
