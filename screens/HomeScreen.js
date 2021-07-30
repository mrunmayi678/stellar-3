import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground,Image,TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>
                <View styles={styles.titleBar}>
                <Image source={require("../assets/main-icon.png")} style={styles.mainIcon}/>
                <Text style={styles.titleText}>Stellar App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("SpaceCrafts")}}>
                    <Text style={styles.routeText}>Space Crafts</Text>
                    <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}/> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("StarMap")}}>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Image source={require("../assets/star_map.png")} style={styles.iconImage}/> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("DailyPic")}}>
                    <Text style={styles.routeText}>Daily Pic</Text>
                    <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}/> 
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
   
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
        fontSize:20
    },
    titleText:{
        fontSize:50,
        fontWeight:"bold",
        color:"white",
        alignSelf:"center",
        justifyContent:"center"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:40,
        borderRadius:60,
        backgroundColor:"white",
        height:170,
        width:480,
        justifyContent:"center",
        alignSelf:"center"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginLeft:20,
        marginTop:10,
        paddingLeft:30,

    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover"

    },
    iconImage:{
        position:"absolute",
        height:100,
        width:100,
        resizeMode:"contain",
        right:20,
        top:-20
    },
    mainIcon:{
        width:160,
        height:200,
        alignSelf:"center",
        justifyContent:"center",
    }
})