import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'

// import { playbackService } from '../../musicPlayerServices'

const ControlPanel = () => {
    const playbackState = usePlaybackState()

    const playNext = async () =>{
        await TrackPlayer.skipToNext()
    }

    const playPrevious = async () =>{
        await TrackPlayer.skipToPrevious()
    }

    const toggleButton = async (playback: State) =>{
        let currentTrack = await TrackPlayer.getCurrentTrack() // Make sure to await the result

        if(currentTrack !== null){
            if(playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play()
            }else{
                await TrackPlayer.pause()
            }
        }
    }

    // Handle the case where playbackState is undefined
    if (!playbackState || !playbackState.state) {
        // Return null or loading indicator or handle this case appropriately
        return null;
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={playPrevious}>
                <Icon size={40} name='skip-previous' style={styles.icon}/>
            </Pressable>
            <Pressable onPress={() => toggleButton(playbackState.state)}>
                <Icon size={75} name={playbackState.state === State.Playing ? "pause" : "play-arrow"}  style={styles.icon}/>
            </Pressable>
            <Pressable onPress={playNext}>
                <Icon size={40} name='skip-next' style={styles.icon}/>
            </Pressable>
        </View>
    )
}

export default ControlPanel

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
})
