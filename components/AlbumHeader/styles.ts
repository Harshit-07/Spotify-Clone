import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    image:{
        height:170,
        width:170,
        marginTop:15,
        marginBottom:5,
    },
    name:{
        color:'white',
        fontSize:22,
        fontWeight:"bold",
    },
    creatorContainer:{
        flexDirection:'row', 
        paddingBottom:5,
    },
    likes:{
        color:'lightgrey',
        margin:4,
        fontSize:14,
    },
    creator:{
        color:'lightgrey',
        margin:4,
        fontSize:14,
    },
    button:{
        backgroundColor:'#1DB954',
        borderRadius:20,
        height:40,
        width:115,
        justifyContent:"center",
        alignItems:"center",
        margin:10
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:19,
    }

})

export default styles;