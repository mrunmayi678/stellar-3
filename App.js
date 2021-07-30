import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import StarMap from './screens/StarMap';
import SpaceCrafts from './screens/SpaceCrafts';
import DailyPic from './screens/DailyPic';
import HomeScreen from "./screens/HomeScreen";

const Stack=createStackNavigator()
export default function App() {
   return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home"screenOptions={{headerShown:false}}>
       <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="StarMap" component={StarMap}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
      </Stack.Navigator>
     </NavigationContainer>
   )

   }
