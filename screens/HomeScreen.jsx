import React from "react";
import { View, Text, Platform, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {style} from "../themes/index";
import TrendingMovie from "../components/trendingMovies"
import MovieList from "../components/movieList";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { useEffect } from "react";
import { fetchTrandingMovie } from "../api/moviedb";
const ios = Platform.OS == "ios";

export default function HomeScreen(){

    const [trending, setTrending] = useState([1,2,3]);
    const [upcoming, setUpcoming] = useState([1,2,3]);
    const [topRated, setTopRated] = useState([1,2,3]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(()=>{
        getTrandingMovie();
    },[])

    const getTrandingMovie = async ()=>{
        const data = await fetchTrandingMovie();
        console.log(data.title);
    }

    return( 
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className={ios ? "-mb-2":"mb-3"}>
                <StatusBar style="light"/>
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                    <Text className="text-white text-3xl font-bold">
                        <Text style={style.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {
                loading?(
                    <Loading/>
                ):(
                   <ScrollView 
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom:10}}>
                            {/* Trending Movies Carousel */}
                        <TrendingMovie data={trending}/>
                            {/* Upcoming Movies row*/}
                        <MovieList title="Upcoming" data={upcoming}/>
                            {/* Top Rated Movies row*/}
                        <MovieList title="Top Rated" data={topRated}/>
                </ScrollView> 
                )
            }
            
        </View>
    )
}