import { Movie } from "../../core/entities/movie.entities";
import type { Result } from "../interfaces/now-playing.use-case";

export class MovieMapper {
    static fromMoviewDBResultToEntity(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w1280${result.backdrop_path}`
        }
    }
}