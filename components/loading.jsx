import React from "react";
import { Text,View, Dimensions } from "react-native";
import * as Progress from 'react-native-progress';
import { theme } from "../themes";

const {width, height} = Dimensions.get("window");

export default function Loading(){
    return(
        <View style={{width,height}} className="absolute flex-row justify-center items-center">
            <Progress.CircleSnail thickness={12} size={160} color={theme.background}/>
        </View>
    )
}