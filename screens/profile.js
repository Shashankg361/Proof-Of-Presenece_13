import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View,TouchableOpacity,Text } from 'react-native';



export default function Profile({ navigation }) {

   /* const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState(false);
    
  
    useEffect(() => {
      const getPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log("Please grant location permissions");
          return;
        }
  
        let currentLocation = await Location.getCurrentPositionAsync({   accuracy: Location.Accuracy.High,
          distanceInterval: 10,});
        setLocation(currentLocation);
        console.log(currentLocation);
        
      
        
        
      };
      getPermissions();
     
       
  
     
    }, []);
    
    
   const reverseGeocode = async () => {
      const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
       
      });
      let {name,street} = reverseGeocodedAddress[0]
     
  
      console.log("Reverse Geocoded:");
      console.log(reverseGeocodedAddress);
      console.log(name);
      console.log(street);

      return [name ,street] ;
     
    };
    
    const[name,street]= reverseGeocode;*/
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
    justifyContent: 'center',
  },
  container2:{
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  button:{
    textAlign:'center',
    backgroundColor:'yellow',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,

  }
 
});