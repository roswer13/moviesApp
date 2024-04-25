import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreeenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if (isLoading) {
        return <FullScreeenLoader />;
    }

    return (
        <ScrollView style={{ marginTop: top + 20, paddingBottom: 30 }}>
            <View>
                {/* Carousel principal */}
                <PosterCarousel movies={nowPlaying} />
                {/* Películas populares */}
                <HorizontalCarousel
                    movies={popular}
                    title='Populares'
                    loadNextPage={popularNextPage} />
                {/* Películas mejor valoradas */}
                <HorizontalCarousel movies={topRated} title='Mejor calificada' />
                {/* Películas próximas */}
                <HorizontalCarousel movies={upcoming} title='Próximamente' />
            </View>
        </ScrollView>
    )
}
