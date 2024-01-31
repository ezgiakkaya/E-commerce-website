import axios from "axios";

const instance = axios.create({
  //api(cloud function)
  baseURL: "http://127.0.0.1:5001/challenge-c219b/us-central1/api",
});

export default instance;
