import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player'

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo = ({track}:SongInfoProps) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.name}>
        {track?.title}
      </Text>
      <Text numberOfLines={1}  style={styles.artist}>
        {track?.artist} . {track?.album}
      </Text>
    </View>
  )
}

export default SongInfo

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 18,
        padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        
      },
      name: {
        marginBottom: 8,
        marginRight:8,
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
        width:175,
      },
      artist: {
        color: '#d9d9d9',
        textAlign: 'center',
        width:175,
        marginRight:8,
      },
})