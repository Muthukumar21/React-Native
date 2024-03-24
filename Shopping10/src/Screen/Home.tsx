import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootstackProps } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PRODUCTS_LIST } from '../Data/constant'
import ClickableCard from '../componets/ClickableCard'
import TagDetails from '../componets/TagDetails'
import Separator from '../componets/Seprator'

type HomeProps = NativeStackScreenProps<RootstackProps,'Home'>

const Home = ({navigation}:HomeProps) => {
    const handleClick = (ref:Product)=>{
      navigation.navigate('Details', {
        product: ref
      })
    }
  return (
    <View style={styles.container}>
      <FlatList
      data={PRODUCTS_LIST}
      keyExtractor={item=>item.id}
      ItemSeparatorComponent={Separator}
      renderItem={(({item}) => (
        <ClickableCard handleClick={handleClick} items={item}/>
      ))}
      />
      {/* <ClickableCard handleClick={handleClick} Product={PRODUCTS_LIST[0]}/>
      <TagDetails tags={PRODUCTS_LIST[0].tags}/> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
})