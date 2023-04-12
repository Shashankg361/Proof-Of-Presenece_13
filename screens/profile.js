import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View,TouchableOpacity,Text } from 'react-native';



export default function Profile({ navigation }) {

  
  return (
    <View style={styles.container}>
      
        
        <TouchableOpacity   style={styles.button}
        onPress={() => navigation.navigate("Presence")}>
        <Text> location</Text>
      
        </TouchableOpacity>
      
     
      <StatusBar style="auto" />
     
     
    </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
 
  button:{
    textAlign:'center',
    backgroundColor:'yellow',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,

  }
 
});