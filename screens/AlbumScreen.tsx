import React,{useEffect} from 'react'
import { Text,View,FlatList } from 'react-native';
import {useRoute} from '@react-navigation/native';
import AlbumDetails from '../data/AlbumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () =>{

    const route = useRoute();

    useEffect( () => {
        console.log(route)
    })

    return(
    <View>
        {/* <SongListItem song={AlbumDetails.songs[0]}/> */}
        <FlatList 
        data={AlbumDetails.songs}
        renderItem={({item}) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={()=> <AlbumHeader album={AlbumDetails}/>}
        />
    </View>
    )
}

export default AlbumScreen;