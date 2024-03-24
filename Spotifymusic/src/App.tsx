import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React , {useEffect,useState} from 'react'
import { setupPlayer,addTrack } from "../playerConfig";
import ControlPanel from './Components/ControlPanel';
import MusicPlayer from './screens/MusicPlayer';

const App = () => {
  const [isPlayerReady, setisPlayerReady] = useState(false)

  async function setUp() {
    let isSetup = await setupPlayer()

    if(isSetup){
      await addTrack()
    }

    setisPlayerReady(isSetup)
  }

  useEffect(() => {
    setUp()
  }, [])
  
  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <MusicPlayer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})