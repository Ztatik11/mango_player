import { View, Text, SafeAreaView, TouchableOpacity,Image,FlatList, Animated,Dimensions} from 'react-native'
import Slider from '@react-native-community/slider'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState, useRef} from 'react'
import {OptionBar} from '../props/optionBar'
import TrackPlayer, {Capability,RepeatMode,Event,State,usePlaybackState,useProgress,useTrackPlayerEvents} from 'react-native-track-player';
import musicPlayerStyle from '../styles/music_player'
import songs from '../models/music';


export const musicPlayer = () => {
  const playBackState = usePlaybackState();
  const progress = useProgress()
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null)
  const {width, height} = Dimensions.get('window');
  const [songIndex, setsongIndex] = useState(0);
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackArtWork, setTrackArtWork] = useState();

  useTrackPlayerEvents([Event.PlaybackTrackChanged],async event =>{
    if(event.type === Event.PlaybackTrackChanged && event.nextTrack !== null){
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const {title, artwork, artist} = track
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtWork(artwork)
    }
  })

  const skipTo = async trackId => {
    await TrackPlayer.skip(trackId)
  }

  useEffect(() => {
    setUpPlayer();
    scrollX.addListener(({value}) =>{
      console.log(value)
      const index = Math.round(value / width);
      skipTo(index)
      console.log(value +"/"+ width)
      console.log(index)
      setsongIndex(index);
    })

    return () => {
      scrollX.removeAllListeners()
    }
  }, [])

  const skipToNext = async() =>{
    const hasMoreTracks = songIndex < (songs.length - 1);
    if(hasMoreTracks){
      await TrackPlayer.skipToNext();
      setsongIndex(songIndex+1);
    }

  }

  const skipToPrevius = async() =>{
    const hasMoreTracks = songIndex > 0;
    if(hasMoreTracks){
      await TrackPlayer.skipToPrevious();
      setsongIndex(songIndex-1);
    }

  }

  const setUpPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(songs);
      await TrackPlayer.play();
    } catch (e) {
      
    }
  }
  const togglePlayBack = async usePlaybackState =>{
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if(currentTrack !=null){
      if(usePlaybackState == State.Paused){
        await TrackPlayer.play();
      }else{
        await TrackPlayer.pause();
      }
    }
  }
  const renderSongs = ({item,index}) => {
    return(
      <Animated.View style={musicPlayerStyle.mainImageWrapper}>
        <View style={[musicPlayerStyle.imageWrapper, musicPlayerStyle.elevation]}>
          <Image 
            style={musicPlayerStyle.musicImage}
            source={{uri:trackArtWork}}
          />
        </View>
      </Animated.View>
      
    )
  }
  return (
    <SafeAreaView style= {musicPlayerStyle.container}>
      <View style= {musicPlayerStyle.maincontainer}>
        {/* Image*/}
        <Animated.FlatList
        ref = {songSlider}
        renderItem={renderSongs}
        data={songs}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x: scrollX}
              }
            }
          ],
          {useNativeDriver: true},
        )}
      />
        <View>
          <Text style={musicPlayerStyle.songTitle}>{trackTitle}</Text>
          <Text style={musicPlayerStyle.songAuthor}>{trackArtist}</Text>
        </View>
        <View>
          <Slider
            style={musicPlayerStyle.progressBar}
            value={progress.position}
            minimumValue={1}
            maximumValue={progress.duration}
            thumbTintColor='#FFD369'
            minimumTrackTintColor='#FFFFFF'
            maximumTrackTintColor='#000000'
            onSlidingComplete={async value=>{
              await TrackPlayer.seekTo(value)
            }}
          />
          <View style={musicPlayerStyle.progressLevelDuration}>
            <Text style={musicPlayerStyle.progressLabelText} >{new Date(progress.position * 1000).toLocaleTimeString().substring(3)}</Text>
            <Text style={musicPlayerStyle.progressLabelText} >{new Date((progress.duration - progress.position) * 1000).toLocaleTimeString().substring(3)}</Text>
          </View>
        </View>
        <View style={musicPlayerStyle.musicControlsContainer}>
          <TouchableOpacity onPress={skipToPrevius}>
              <Ionicons name="play-skip-back-outline" size={35} color="#FFD369"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
              <Ionicons name={playBackState === State.Playing ? "ios-pause-circle":"ios-play-circle"} size={75} color="#FFD369"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
              <Ionicons name="play-skip-forward-outline" size={35} color="#FFD369"/>
          </TouchableOpacity>
          
        </View>
      </View>
      <OptionBar/>
    </SafeAreaView>
  )
}
