import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}