import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Cast({cast, navigation}) {

    let personName = 'Keanu Reevs';
    let characterName = 'Jhon wick'

  return (
    <View className="my-5">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}
        >
            {
                cast && cast.map((person, index)=>{
                    return(
                        <TouchableOpacity key={index}
                            onPress={()=>navigation.navigate('Person',person)}
                            className="mr-4 items-center">
                                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                    <Image
                                    source={require('../assets/images/castImage1.png')}
                                    className="rounded-2xl h-24 w-20"
                                    /> 
                                </View>
                                
                                <Text className="text-white text-xs mt-1">
                                    {
                                        characterName.length > 10 ? characterName.slice(0,10)+'...':
                                        characterName
                                    }
                                </Text>
                                <Text className="text-neutral-400 text-xs mt-1">
                                    {
                                        personName.length > 10 ? personName.slice(0,10)+'...':
                                        personName
                                    }
                                </Text>
                        </TouchableOpacity>
                    )
                })
            }
      </ScrollView>
    </View>
  );
}
