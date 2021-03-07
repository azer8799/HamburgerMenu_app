import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
  } from 'react-native';
  import {DrawerNavigatorItems} from 'react-navigation-drawer';



  const SideMenu = (props) => (
      <ScrollView>
          
          <View style={styles.container}>
              <DrawerNavigatorItems {...props}/>
          </View>
           
      </ScrollView>

  )

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }})

    
  export default SideMenu;