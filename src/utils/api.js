import axios from 'axios'
const BASE_URL = "https://api.themoviedb.org/3";
//import.meta.env.VITE_APP_TMDB_TOKEN
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjAyNDAzYjM3OTk2OWJjZjMyZDlmYjI0YjY0MDZiYyIsInN1YiI6IjY1ODQ2NmE3YzRmNTUyMDI1NmE4YWQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8zcYDCUX28nkmP_xQttpu3w0aIfLCt3i1hFfZb9Tio";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};