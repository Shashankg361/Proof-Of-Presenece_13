import { useState, useEffect, Component } from 'react';
import { Image } from 'react-native';
import exampleImage from './img/marker.png';


import { Platform, Text, View, StyleSheet, Button, TouchableOpacity, ScrollView, RefreshControl ,Modal,Pressable,TextInput } from 'react-native';
import { Callout, Marker, Circle } from 'react-native-maps';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import base64 from 'react-native-base64';
import {styles} from './avocado';
//const marker_Img = require('./img/favicon.png');




export default function Presence(navigation, route) {
  const [modalVisible, setModalVisible] = useState(false);
  const [review, setReview] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city,setcity]=useState("");
  const [name,setname]=useState("");
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })
  const [cord, setCord] = useState({
    latitude: 37.78825,
    longitude: -122.4324,

  })
  const exampleImageUri = Image.resolveAssetSource(exampleImage).uri


  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        distanceInterval: 10,
      });
      setLocation(currentLocation);
    
     // console.log(currentLocation);




    };
    getPermissions();

  }, []);

  const getLoc = () => {
   // console.log("press", location.coords)
    let latitude = location.coords.latitude
    let longitude = location.coords.longitude
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    })

  } ;



  useEffect(() => {
    if(location) {
      getLoc();
      
      
      
    
    }
  }, [location]) 

  const reverseGeocode = async() => {
     const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
       longitude: region.longitude,
       latitude: region.latitude,
     });
     let {name,street,city} = reverseGeocodedAddress[0]
     setname(name);
     setcity(city);
   
    
 
    //  console.log("Reverse Geocoded:");
    // console.log(reverseGeocode);
     
     
     
     }; 
    reverseGeocode();
    

      const svf = () =>{
      
        
        const svg = ` <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500');
      </style>
      </defs>
        
    `
     const svg2 = `<rect width="500" height="500" fill="white"/>
     <rect width="500" height="500" rx="15" fill="white" />
     <rect y="305" width="500" height="175" rx="15" fill="white" />
     <rect y="20" width="500" height="175" rx="15" fill="white" fill-opacity="0.49"/>
     <rect y="175" width="500" height="160" rx="15" fill="white" />
     <rect width="500" height="500" rx="15" stroke="black"/>` 
    
      const svg3 = `<text x="18" y="70" font-family="Poppins" font-weight="bold" font-size="30" fill="black">PROOF OF PRESENCE</text>
        <text x="18" y="110" font-family="Poppins" font-weight="bold" font-size="30" fill="black">`
       const com_name =`${city}`
        const svg4 = `</text><text x="18" y="210" font-family="Poppins" font-weight="bold" font-size="30" fill="black">TOKEN I'D :</text>
           <text x="18" y="270" font-family="Poppins" font-weight="bold" font-size="40" fill="black">`
           const tok_name = `${name}`
            const svg5 = `</text><text x="18" y="380" font-family="Poppins" font-weight="bold" font-size="30" fill="black">CONTRACT :</text>
             <text x="18" y="420" font-family="Poppins" font-weight="bold" font-size="30" fill="black">`
           const cont_name =  `${review}`
         const svg6 =  `</text></svg>`
     
         const img = svg + svg2 + svg3 + com_name +svg4 + tok_name +svg5+ cont_name +svg6
         const encode = base64.encode(img)
        // console.log(encode);
         
         return encode;
   
      }

      const data = svf()

    
    
  

  









  return (
     <View style={styles.container}>
     
      <MapView style={styles.map} region={region} /*showsUserLocation={true} */  >

        <Marker coordinate={region} image={exampleImageUri} title={name} >
        
          
        </Marker>
        <Circle center={region} radius={400} strokeWidth={2} strokeColor="black" fillColor='rgba(255, 188, 188, 0.8)'/>
      </MapView>
      
     
      
      <View
        style={{
          position: 'absolute',//use absolute position to show button on top of the map
          top: '90%', //for center align
          alignSelf: 'center' //for align to right
       
        }}
      > 
        
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>mint nft!</Text>
        </Pressable>
       
       </View>
       <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
  
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredModal}>
            <View style={styles.modalView}>
              <TextInput
  
                style={styles.input}
                placeholder="write some review"
                // def={review}
                value={review}
                // defaultValue={review}
                onChangeText={newText => setReview(newText)}
              //onSubmitEditing={(value) => setReview(value)}
  
  
              ></TextInput>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress= {()=> {
                  console.log(data);
                }}>
                <Text style={styles.textStyle}>Press</Text>
  
              </Pressable>
  
            </View>
          </View>
        </Modal>



    </View>
   

  );
}


