import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/now-playing.use-case";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entities";

export const moviesNowPlayingUseCases = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        return nowPlaying.results.map(result => MovieMapper.fromMoviewDBResultToEntity(result))
    }
    catch (error) {
        throw new Error('Error fetching now playing movies');
    }
}