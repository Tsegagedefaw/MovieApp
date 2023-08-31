import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {style} from "../themes/index";
export default function MovieList({title,data}) {
    return (
      <View className="mb-8 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-white text-xl">{title}</Text>
            <TouchableOpacity>
                <Text style={style.text} className="text-lg"> See All </Text>
            </TouchableOpacity>
        </View>
        {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:15}}
        >
            {
                data.map((item,index))
            }
        </ScrollView> */}
      </View>
    )
}
