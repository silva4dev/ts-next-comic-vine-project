import axios from "axios";

const url = "https://comicvine.gamespot.com/api";

export const api = axios.create({
    baseURL: url,
    withCredentials: false
});
