import axios from "axios";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");

const instance = axios.create({
    baseURL: "https://uatapi.magaswala.com/public/api/",

    // baseURL: "https://magaswalaapi.magaswala.com/public/api/",

    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;