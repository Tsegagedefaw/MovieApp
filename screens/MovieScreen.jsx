import { useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View,Text, TouchableOpacity, Dimensions, Platform,Image } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {style, theme} from '../themes/index'
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MovieList from "../components/movieList";
import Cast from "../components/cast";

var {width, height} = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios?'':'mt-3'

export default function MovieScreen(){
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similaeMovie, setSimilaeMovie] = useState([1,2,3,4,5])
    useEffect(()=>{

    },[item])
    return(
        <ScrollView
            contentContainerStyle={{paddingBottom: 35}}
            className="flex-1 bg-neutral-900">
                <View className="w-full">
                    <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-start px-4"+topMargin}>
                        <TouchableOpacity
                            style={style.background}   
                            className="rounded-xl p-1"
                            onPress={()=>navigation.goBack()}>
                            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)}>
                            <HeartIcon size="35" color={isFavourite ? theme.background: "white"}/>
                        </TouchableOpacity>
                    </SafeAreaView>
                    <View>
                        <Image
                            source={require('../assets/images/moviePoster2.png')}
                            style={{width,height:height*0.55}}
                        />
                        <LinearGradient
                            colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                            style={{width, height:height*0.40}}
                            start={{x:0.5,y:0}}
                            end={{x:0.5,y:1}}
                            className="absolute bottom-0"
                            />
                    </View>
                </View>
                <View style={{marginTop:-height*0.09}} className="space-y-3">
                    {/* Movie Name */}
                    <Text className="text-white text-center text-3xl font-bold tracking-wider">
                        {movieName}
                    </Text>
                    {/* Date */}
                    <Text className="text-neutral-400 font-semibold text-center text-base">
                        Released - 2020 - 170 min
                    </Text>
                    {/* Generes */}
                    <Text className="text-neutral-400 font-semibold text-center text-base">
                        Action - Thrill - Comedy
                    </Text>
                    {/* Description */}
                    <Text className="text-neutral-400 mx-4 tracking-wide">
                    Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.
                    </Text>
                </View>
                {/* Cast */}
                <Cast navigation={navigation} cast={cast}/>
                {/* MovieList */}
                <MovieList title= "Similar Movie" hideSeeAll={true} data={similaeMovie}/>
        </ScrollView>
    )
}