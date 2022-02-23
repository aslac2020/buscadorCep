import axios from "axios";

//07741205/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;