import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entities';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entities';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetail = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{movie.rating}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {movie.genres.join(', ')}
                    </Text>
                </View>

                <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>{movie.description}</Text>
                <Text style={{ marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>

                <Text style={{ fontSize: 18 }}>{Formatter.currency(movie.budget)}</Text>

            </View>

            {/* Cast */}
            <View style={{ marginTop: 10, marginBottom: 50 }}>
                <Text style={{
                    fontSize: 23,
                    marginVertical: 10,
                    fontWeight: 'bold',
                    marginHorizontal: 20
                }}
                >
                    Actores
                </Text>


                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CastActor cast={item} />}>
                </FlatList>
            </View>
        </>
    )
}
