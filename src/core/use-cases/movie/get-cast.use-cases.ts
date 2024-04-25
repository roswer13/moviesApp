import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/now-playing.use-case";
import { Cast } from '../../entities/cast.entities';
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";


export const getMovieCastUseCase = async (
    fetcher: HttpAdapter, movieId: number
): Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
        return cast.map(CastMapper.fromMovieDBCastToEntity);
    } catch (error) {
        throw new Error(`Cannot get movie cast by id ${movieId}`);
    }
}