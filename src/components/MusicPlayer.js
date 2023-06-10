import { View, Text, SafeAreaView, TouchableOpacity,Image,FlatList, Animated,Dimensions} from 'react-native'
import Slider from '@react-native-community/slider'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useEffect, useState, useRef} from 'react'
import {OptionBar} from '../props/optionBar'
import TrackPlayer, {Capability,RepeatMode,Event,State,usePlaybackState,useProgress,useTrackPlayerEvents} from 'react-native-track-player';
import musicPlayerStyle from '../styles/music_player'
import { useRoute } from '@react-navigation/native';

const setUpPlayer = async (songs) => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities : [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ]
    })
    await TrackPlayer.add(songs);
    await TrackPlayer.skip(songIndex);
    await TrackPlayer.play();
  } catch (e) {
    
  }
}

const togglePlayBack = async usePlaybackState =>{
  console.log(usePlaybackState);
  if (
    usePlaybackState === State.Paused ||
    usePlaybackState === State.Ready ||
    usePlaybackState === State.Buffering ||
    usePlaybackState === State.Connecting
  ) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
  }
}


export const musicPlayer = () => {
  const route = useRoute()
  const [imageLoaded, setImageLoaded] = useState(false);
  const playBackState = usePlaybackState();
  const progress = useProgress()
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null)
  const {width, height} = Dimensions.get('window');
  const [songIndex, setsongIndex] = useState(route.params.index);
  const [repeatMode, setRepeatMode] = useState("off")
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackArtWork, setTrackArtWork] = useState();
  const ref = useRef();
  useTrackPlayerEvents([Event.PlaybackTrackChanged],async event =>{
    console.log(route.params.data)
    if(event.type === Event.PlaybackTrackChanged && event.nextTrack !== null){
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const {id,trackid,url,title, artist,artwork} = track
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtWork(artwork)
    }
  })

  const repeatIcon = () =>{
    if(repeatMode == 'off'){
      return 'repeat-off'
    }
    if(repeatMode == 'track'){
      return 'repeat-once'
    }
    if(repeatMode == 'repeat'){
      return 'repeat'
    }
  }

  const changeRepeatMode = () =>{
    if(repeatMode == 'off'){
      TrackPlayer.setRepeatMode(RepeatMode.Track)
      setRepeatMode('track')
    }
    if(repeatMode == 'track'){
      TrackPlayer.setRepeatMode(RepeatMode.Queue)
      setRepeatMode('repeat')
    }
    if(repeatMode == 'repeat'){
      TrackPlayer.setRepeatMode(RepeatMode.Off)
      setRepeatMode('off')
    }
  }

  const skipTo = async trackId => {
    await TrackPlayer.skip(trackId)
  }
  
  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollToIndex({
        animated: true,
        index: songIndex,
      });
    }, 500);
  }, []);
  useEffect(() => {
    setUpPlayer(route.params.data);
  }, [])

  const skipToNext = async() =>{
    
    if (songs.length - 1 > songIndex) {
      setsongIndex(songIndex + 1);
      ref.current.scrollToIndex({
        animated: true,
        index: parseInt(songIndex) + 1,
      });
      await TrackPlayer.skip(parseInt(songIndex) + 1);
      togglePlayBack(playBackState);
    }

  }

  const skipToPrevius = async() =>{
    if (songIndex > 0) {
      setsongIndex(songIndex - 1);
      ref.current.scrollToIndex({
        animated: true,
        index: parseInt(songIndex) - 1,
      });
      await TrackPlayer.skip(parseInt(songIndex) - 1);
      togglePlayBack(playBackState);
    }
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  const renderSongs = ({item,index}) => {
    return(
      <View style={musicPlayerStyle.mainImageWrapper}>
        <View style={[musicPlayerStyle.imageWrapper, musicPlayerStyle.elevation]}>
          <Image 
            style={musicPlayerStyle.musicImage}
            source={{uri:item.artwork}}
          />
        </View>
      </View>
      
    )
  }
  return (
    <SafeAreaView style= {musicPlayerStyle.container}>
      <View style= {musicPlayerStyle.maincontainer}>
        {/* Image*/}
        <FlatList
        
        renderItem={renderSongs}
        horizontal
          ref={ref}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={route.params.data}
          onScroll={async e => {
            const x = e.nativeEvent.contentOffset.x / width;
            setsongIndex(parseInt(x.toFixed(0)));
            await TrackPlayer.skip(parseInt(x.toFixed(0)));
            togglePlayBack(playBackState);
          }}
      />
        <View>
          <Text style={musicPlayerStyle.songTitle}>{trackTitle}</Text>
          <Text style={musicPlayerStyle.songAuthor}>{trackArtist}</Text>
        </View>
        <View>
          <Slider
            style={musicPlayerStyle.progressBar}
            value={progress.position}
            minimumValue={0}
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
              <Ionicons 
              name={
                playBackState === State.Playing
                 ? "ios-pause-circle"
                 :"ios-play-circle"
              } size={75} color="#FFD369"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
              <Ionicons name="play-skip-forward-outline" size={35} color="#FFD369"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={changeRepeatMode}>
              <MaterialCommunityIcons name={`${repeatIcon()}`} size={35} color={repeatMode !== 'off' ? '#FFD369' : '#888888'}/>
          </TouchableOpacity>
          
        </View>
      </View>
      <OptionBar/>
    </SafeAreaView>
  )
}
