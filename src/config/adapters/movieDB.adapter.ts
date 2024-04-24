import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: '55cc416b54e9ede2ae0eaa0268b9bb3f',
        language: 'es'
    },
});