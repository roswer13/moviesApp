import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigations/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetail } from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreeenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    const { isLoading, movie, cast } = useMovie(movieId);

    if (isLoading || !movie || !cast) {
        return <FullScreeenLoader />;
    }

    return (
        <ScrollView>
            {/* Header */}
            <MovieHeader
                poster={movie!.poster}
                originalTitle={movie!.originalTitle}
                title={movie!.title} />
            {/* Details */}
            <MovieDetail movie={movie!} cast={cast} />
        </ScrollView>
    )
}
