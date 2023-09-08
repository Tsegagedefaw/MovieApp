import React, { useState } from 'react';
import { Dimensions, Platform, ScrollView, Text,View, TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {style, theme} from '../themes/index';
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import MovieList from '../components/movieList';
import Loading from '../components/loading';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == "ios";
const verticalMargin = ios?'':'my-3'

export default function PersonScreen(){
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovie, setPersonMovie] = useState([1,2,3,4,5])
    return(
        <ScrollView className="flex-1 bg-neutral-900"
                    contentContainerStyle={{paddingBottom:35}}>
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-start px-4"+verticalMargin}>
                        <TouchableOpacity
                            style={style.background}   
                            className="rounded-xl p-1 ml-3"
                            onPress={()=>navigation.goBack()}>
                            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)} className="mr-3">
                            <HeartIcon size="35" color={isFavourite ? 'red': "white"}/>
                        </TouchableOpacity>
                    </SafeAreaView>
                    {
                        loading ? (
                            <Loading />
                        ):(
                            <View>
                                <View className="flex-row justify-center"
                                        style={{
                                            shadowColor:'gray',
                                            shadowRadius:40,
                                            shadowOffset:{width:0, height:5},
                                            shadowOpacity:1 
                                        }}>
                                        <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                                            <Image 
                                                source={require('../assets/images/castImage2.png')}
                                                style={{width: width*0.73,height:height*0.43}}
                                        />
                                        </View>
                                </View>
                                                {/* Actor Name */}
                                <View className="mt-6">
                                    <Text className="text-3xl text-white font-bold text-center">
                                        Keanu Reeves
                                    </Text>
                                    <Text className="text-base text-neutral-500 text-center">
                                        London, united Kingdom
                                    </Text>
                                </View>
                                {/* Actor Some Specification */}
                                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                        <Text className="text-white font-semibold">Gender</Text>
                                        <Text className="text-neutral-300 text-sm">Male</Text>
                                </View>
                                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                        <Text className="text-white font-semibold">Birthday</Text>
                                        <Text className="text-neutral-300 text-sm">1964-09-02</Text>
                                </View>
                                <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                        <Text className="text-white font-semibold">known for</Text>
                                        <Text className="text-neutral-300 text-sm">Actor</Text>
                                </View>
                                <View className="px-2 items-center">
                                        <Text className="text-white font-semibold">Popularity</Text>
                                        <Text className="text-neutral-300 text-sm">64.23</Text>
                                </View>
                                </View>
                                {/* Actor biography */}
                                <View className="mt-6 mx-4 space-y-2">
                                    <Text className="text-white text-lg">Biography</Text>
                                    <Text className="text-neutral-400 tracking-wider">
                                    Keanu Charles Reeves is a Canadian actor and musician. Born in Beirut and raised in Toronto, he made his acting debut in the Canadian television series Hangin In, before making his feature film debut in Youngblood.
                                    </Text>
                                </View>
                                {/* Movies */}

                                <MovieList title={'Movies'} data={personMovie} hideSeeAll={true}/>
                
                            </View>
                        )
                    }
                    
        </ScrollView>
    )
}