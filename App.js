
import React from 'react';
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import ItemScreen from './Screen/ItemScreen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

  
});
const Stack = createNativeStackNavigator();

export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="ItemScreen" component={ItemScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


