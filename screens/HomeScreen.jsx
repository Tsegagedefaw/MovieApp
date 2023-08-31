import React from "react";
import { View, Text, Platform, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {style} from "../themes/index";
import TrendingMovie from "../components/trendingMovies"
import MovieList from "../components/movieList";
import { useState } from "react";

const ios = Platform.OS == "ios";

export default function HomeScreen(){

    const [trending, setTrending] = useState([1,2,3])
    const [upcoming, setUpcoming] = useState([1,2,3])
    const [topRated, setTopRated] = useState([1,2,3])

    return( 
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className={ios ? "-mb-2":"mb-3"}>
                <StatusBar style="light"/>
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                    <Text className="text-white text-3xl font-bold">
                        <Text style={style.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:10}}>
                    {/* Trending Movies Carousel */}
                <TrendingMovie data={trending}/>
                    {/* Upcoming Movies row*/}
                <MovieList title="Upcoming" data={upcoming}/>
            </ScrollView>
        </View>
    )
}