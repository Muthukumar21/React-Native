import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { RootStackParamList } from '../App'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type LastPageProps = NativeStackScreenProps<RootStackParamList,"LastPage">
const LastPage = ({route}:LastPageProps) => {
  const {productName} = route.params
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
    <Text style={styles.smallText}>LastPage: {productName}</Text>
    <Button
    title='Go to Home'
    // onPress={() => navigation.navigate("Home")}
    onPress={() => navigation.goBack()}
    />
    <Button
    title='Go back to first screen'
   
    // onPress={() => navigation.pop(2)}
    onPress={() => navigation.popToTop()}
    />
  </View>
  )
}

export default LastPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
smallText: {
    color: "#000000"
}
})