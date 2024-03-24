import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../componets/pages/Home';
import Details from '../componets/pages/Details';
import LastPage from '../componets/pages/LastPage';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
  LastPage:{productName: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            title: 'Home',
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: 'Details',
          }}
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{
            title: 'LastPage',
          }}
          name="LastPage"
          component={LastPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})