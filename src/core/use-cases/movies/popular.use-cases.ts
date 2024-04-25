import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/now-playing.use-case";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entities";

interface Options {
    page?: number
    limit?: number
}

export const moviesPopularUseCases = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<MovieDBMoviesResponse>('/popular', {
            params: {
                page: options?.page || 1
            }
        });
        return nowPlaying.results.map(result => MovieMapper.fromMoviewDBResultToEntity(result))
    }
    catch (error) {
        throw new Error('Error fetching popular movies');
    }
}