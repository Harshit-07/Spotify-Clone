import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        margin:10,
    },
    rightContainer:{
        marginLeft:11,
        justifyContent:'space-around',
    }
    ,
    title:{
        color:'white',
        fontSize:16,
        fontStyle:'normal',
        marginTop:15,
    },
    artist:{
        marginBottom:15,
        color:'lightgrey',
        fontSize:13,
    },
    image:{
        height:70,
        width:70,
    }
})

export default styles;
