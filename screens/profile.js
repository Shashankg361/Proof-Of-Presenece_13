import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View,TouchableOpacity,Text,Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';


//ios clientId :1015424454227-1ahfo4nnjigd68rojnnhe74qo5r4ir9q.apps.googleusercontent.com
// android clientId : 1015424454227-mmoob6qurg5cc3rcclioie0d5glmm5so.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession();



export default function Profile({ navigation }) {

  const [accessToken,setAccessToken] = React.useState(null);
  const [user,setUser] = React.useState(null); 
  const [request,response , promptAsync] = Google.useAuthRequest(
    {
      clientId:"1015424454227-b10oo09c5i2j0pgoqtsvqsn1ftr8ond9.apps.googleusercontent.com",
      iosClientId:"1015424454227-1ahfo4nnjigd68rojnnhe74qo5r4ir9q.apps.googleusercontent.com",
      androidClientId:"1015424454227-mmoob6qurg5cc3rcclioie0d5glmm5so.apps.googleusercontent.com"
    }
  );


  React.useEffect(()=>{
    if(response?.type === 'success'){
      setAccessToken(response.authentication.accessToken);
    }
    accessToken && fetchUserInfo();
  },[response,accessToken]);

  async function fetchUserInfo (){
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
      headers:{Authorization: `Bearer ${accessToken}`}
    });
    const userInfo = await response.json();
    setUser(userInfo);
  };



  const ShowUserInfo = ()=>{
    if(user){
      return (

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:35, fontWeight:"bold",marginBottom:20}}>Welcome!!</Text>
          <Image source={{uri: user.picture}} style={{width:100,height:100,border:5}}/>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{user.name}</Text>

          <TouchableOpacity   style={styles.button}
            onPress={() => navigation.navigate("Presence")}>
          <Text> location</Text>
        
          </TouchableOpacity>
        
      
        <StatusBar style="auto" />
        </View>
      )
    }
  }



  return (
    <View style={styles.container}>
      {user && <ShowUserInfo /> }
        
      {user === null &&
          <>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
            }} 
        >
          <View style={{borderColor:"black",borderWidth:3,}}>
            <Image source={require("./btn.png")} style={{width: 300, height: 40}} />
          </View>
          
        </TouchableOpacity>
        </>
      }  
    </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#D3D3D3',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  button:{
    textAlign:'center',
    backgroundColor:'yellow',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,

  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
 
});