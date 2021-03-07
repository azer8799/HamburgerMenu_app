import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesome5} from  '@expo/vector-icons';
 
 export default class Screen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity
                        style={{alignItems: "flex-start", margin:16,top :20, opacity:0.6 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                    <FontAwesome5 name="bars" size={45} color="#4287f5" />
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>

                         <Text style={styles.text}>{this.props.name} Screen</Text>
                    </View>
                 </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff"
    },
    text: {
     color: "#161924",
     fontSize: 30,
     fontWeight: "bold",
     alignItems: "center"
    },
})