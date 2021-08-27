import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container :{
        flexDirection:'column',
        position:'absolute',
        bottom:49,
        width:'100%',
        backgroundColor:'#181818',
        borderWidth:2,
        borderColor:'black',
        // alignItems:'center',
        height:75,
    },
    progress: {
        height: 4,
        backgroundColor: '#bcbcbc',
        width:'100%',
      },
      row: {
        flexDirection: 'row',
      },
      image: {
        width: 75,
        height: 75,
        marginRight: 10,
      },
      rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
      },
      title: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10,
      },
      artist: {
        color: 'lightgray',
        fontSize: 13,
      }
})

export default styles;
