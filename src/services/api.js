import axios from "axios";

const api = axios.create({
    baseURL: "https://uwsf2et4i7.execute-api.ap-south-1.amazonaws.com"
});

export default api;