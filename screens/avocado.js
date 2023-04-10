import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },

    parent: {
      width: 300,
      height: 500,
      backgroundColor: 'red',
      margin: 50,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        alignItems: 'center',
        marginTop: 22,
      },
      centeredModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-evenly',
    
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
    
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      input: {
    
        height: 40,
    
    
        margin: 20,
    
        borderWidth: 1,
        borderRadius: 20,
      },
  });
  
  export {styles};