import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/now-playing.use-case";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entities";

export const moviesTopRatedUseCases = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<MovieDBMoviesResponse>('/top_rated');
        return nowPlaying.results.map(result => MovieMapper.fromMoviewDBResultToEntity(result))
    }
    catch (error) {
        throw new Error('Error fetching top rated movies');
    }

}