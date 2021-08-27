import React, { useEffect, useState } from 'react';
import { Text,View,Image, TouchableOpacity } from 'react-native';
import styles from '../PlayerWidget/styles';
import { FontAwesome,AntDesign } from '@expo/vector-icons'
import {Audio} from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

const song = {
    id:'1',
    uri:'../../assets/mp3/sample1.mp3',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSb-KM3_GLLdWRJ0D1cUeacqVfMKxZ95I0Q&usqp=CAU',
    title: 'Get Low',
    artist: 'DJ snake',
}

const PlayerWidget = () => {

    const [sound,setSound] = useState<Sound|null>(null);
    const [isPlaying,setIsPlaying] = useState<boolean>(true);
    const [duration,setDuration]=useState<number>(null);
    const [position,setPosition]=useState<number>(null);

 
    const PlaybackStatus = (status) =>{

        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis) ;
        console.log(status);
    }

     const playCurrentSong = async () =>{

        if(sound) {
            await sound.unloadAsync();
        }

         const {sound: newSound} = await Sound.createAsync( 
             require('../../assets/mp3/sample1.mp3'),
             {shouldPlay : isPlaying},
                PlaybackStatus
         )
         setSound(newSound);
    }

    useEffect(() => {
        return () => {
          playCurrentSong();  
        }
    }, [])

    const onPlayPause = async () =>{
        if (!sound) {
            return;
        }
        if(isPlaying) {
            await sound.stopAsync();
        }
        else{
            await sound.playAsync();
        }
    }

    const onProgress = () =>{
        if(sound===null|| duration===null|| position===null){
            return 0;
        }
        const progress=(position/duration)*100;
        return progress;
    }

    return(
        <View style={styles.container}>
        <View style={[styles.progress,{width:`${onProgress()}%`}]} />
        <View style={styles.row}>
          <Image source={{ uri: song.imageUri }} style={styles.image} />
          <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.title}>{song.title}</Text>
              <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.iconsContainer}>
              <AntDesign name="hearto" size={25} color={"red"}/>
              <TouchableOpacity onPress={onPlayPause}>
                <FontAwesome name={isPlaying ? 'pause' : 'play'} size={25} color={"white"}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
}

export default PlayerWidget;