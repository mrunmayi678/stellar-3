import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SpaceCraftsScreen extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Text>Space Crafts Screen</Text>
            </View>
        )
    }
}