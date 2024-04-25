import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/now-playing.use-case";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entities";

export const getMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number
): Promise<FullMovie> => {

    try {
        const nowPlaying = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        return MovieMapper.fromMovieDBToEnity(nowPlaying);
    } catch (error) {
        throw new Error(`Cannot get movie by id ${movieId}`);
    }
};