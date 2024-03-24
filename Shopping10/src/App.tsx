import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screen/Home'
import Details from './Screen/Details'

export type RootstackProps = {
  Home:undefined,
  Details: {product: Product},
}

const Stack = createNativeStackNavigator<RootstackProps>()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title:'Trending Products'}}/>
        <Stack.Screen name='Details' component={Details} options={{title:'Product Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
