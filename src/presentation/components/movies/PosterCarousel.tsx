import { Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entities'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ height = 400, movies }: Props) => {
    return (
        <View style={{ height }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    movies.map(movie => (
                        <View key={movie.id}>
                            <MoviePoster movie={movie} />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
