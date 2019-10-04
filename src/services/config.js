import axios from 'axios';

export const http = axios.create({
    baseURL: "http://127.0.0.1/wordcamp2019/wp-json/wp/v2/"
});