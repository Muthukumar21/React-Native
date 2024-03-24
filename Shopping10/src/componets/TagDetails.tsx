import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TagProps = {
    tags:string[]
}

const TagDetails = (props:TagProps) => {
    const {tags} = props
  return (
      tags.map((tag:string)=>(
        <View style={styles.container}>
        <Text style={styles.tagtxt}>{tag}</Text>
        </View>
      ))
  )
}

export default TagDetails

const styles = StyleSheet.create({
    container:{
        margin: 2,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    tagtxt:{paddingVertical: 2,
        paddingHorizontal: 4,
    
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.5)',
    
        color: 'rgba(0, 0, 0, 0.8)',}
})