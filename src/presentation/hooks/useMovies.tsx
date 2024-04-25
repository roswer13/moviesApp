import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entities"

import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

let popularPageNumber = 1;

export const useMovies = () => {

    const [isLoading, setLoading] = useState(true);
    const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);


    useEffect(() => {
        initLoad();
    }, []);

    const initLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCases(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCases(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCases(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpcomingUseCases(movieDBFetcher);

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setnowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setLoading(false);
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        // Methods
        popularNextPage: async () => {
            popularPageNumber++;
            const popularMovies = await UseCases.moviesPopularUseCases(movieDBFetcher, { page: popularPageNumber });
            setPopular(prev => [...prev, ...popularMovies]);
        }
    }
}
