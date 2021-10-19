
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import ItemScreen from './Screen/ItemScreen';
import ItemScreen2 from './Screen/ItemScreen2';
import DetailScreen from './Screen/DetailScreen';
import { enableScreens } from 'react-native-screens';

const styles = StyleSheet.create({

  
});
const Stack = createNativeStackNavigator();
enableScreens();
export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="ItemScreen" component={ItemScreen} />
        <Stack.Screen options={{headerShown:false}} name="ItemScreen2" component={ItemScreen2} />
        <Stack.Screen options={{headerShown:false,animation:"slide_from_right",presentation:"transparentModal"}}  name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


