import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/HomeScreen'
import MovieScreen from "../screens/MovieScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
                <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}