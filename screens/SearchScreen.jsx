import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Dimensions, Image, ScrollView, Text,TextInput,TouchableOpacity,TouchableWithoutFeedback,View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../components/loading";

const {width, height} = Dimensions.get("window");

export default function SearchScreen(){
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    const navigation = useNavigation();
    const [result, setresult] = useState([1,2,3,4,5]);
    const [loading, setLoading] = useState(false);

    return(
        <SafeAreaView className="bg-neutral-800 mb-3 flex-1 pt-6">
            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput
                    placeholder="Search Movie"
                    placeholderTextColor={'lightgray'}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
                />
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Home')}    
                    className="rounded-full p-3 m-1 bg-neutral-500">
                    <XMarkIcon size="25" color="white"/>
                </TouchableOpacity>
            </View>
            {
                loading?(
                    <Loading/>
                ):(
                            result.length> 0 ?(
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{paddingHorizontal:15}}
                                    className="space-y-3"
                                >
                                    <Text className="text-white font-semibold ml-1">Result ({result.length})</Text>
                                    <View className="flex-row justify-between flex-wrap">
                                        {
                                            result.map((item, index)=>{
                                                return(
                                                    <TouchableWithoutFeedback
                                                        key={index}
                                                        onPress={()=>navigation.push("Movie",item)}
                                                    >
                                                        <View className="space-y-2 mb-4">
                                                        <Image className="rounded-3xl"
                                                                source={require('../assets/images/moviePoster2.png')}
                                                                style={{width:width*0.44, height:height*0.3}}
                                                            /> 
                                                            <Text className="text-neutral-400 ml-1">
                                                                {movieName.length > 22 ? movieName.slice(0,22)+'...' :
                                                                movieName}
                                                            </Text>
                                                        </View>
                                                        
                                                    </TouchableWithoutFeedback>
                                                )
                                            })
                                        }
                                    </View>
                                </ScrollView>
                            ):(
                                <View className="flex-row justify-center">
                                    <Image
                                        source={require('../assets/images/movieTime.png')}
                                        className="w-96 h-96"
                                    />
                                </View>
                            )
                )
            }
            

            
        </SafeAreaView>
    )
}