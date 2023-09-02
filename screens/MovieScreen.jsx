import { useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { View,Text, TouchableOpacity, Dimensions, Platform } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {style} from '../themes/index'
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";

var {width, height} = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios?'':'mt-3'

export default function MovieScreen(){
    const {params: item} = useRoute();
    useEffect(()=>{

    },[item])
    return(
        <ScrollView
            contentContainerStyle={{paddingBottom: 35}}
            className="flex-1 bg-neutral-900">
                <View className="w-full">
                    <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-start px-4"+topMargin}>
                        <TouchableOpacity style={style.background} className="rounded-xl p-1">
                            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <HeartIcon size="35" color="white"/>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
        </ScrollView>
    )
}