import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,Platform ,Picker ,Button,   ScrollView,TouchableWithoutFeedback,} from 'react-native';
function App() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
     <View style={{flexDirection:'row'}}>
   <View style={{flexDirection:'row',borderRadius:'108px',Height:'50%',Width:'5%',marginTop:'1%',backgroundColor:'#eeeeee',marginLeft:'10%',marginRight:1}}>
    
    <Image source={require('./assets/refresh.png')} style={styles.ImageStyle} />
 <button onClick={refreshPage} style={{borderRadius:'108px',marginTop:5,marginBottom:5,backgroundColor:'#fff',borderColor:'#acacac',height:35,width:130,marginRight:5}}>Refresh this Add</button>
             </View>
             
             <View style={{flexDirection:'row',borderRadius:'108px',Height:'50%',Width:'5%',marginTop:'1%',backgroundColor:'#eeeeee',marginLeft:'1%',marginRight:'33%'}}>
    <Image source={require('./assets/Edit.png')} style={styles.ImageStyle} />
 <button style={{borderRadius:'108px',marginTop:5,marginBottom:5,backgroundColor:'#fff',borderColor:'#acacac',height:35,width:100,marginRight:5}}>Edit</button>
             </View>
             <View style={{flexDirection:'row',borderRadius:'108px',Height:'50%',Width:'5%',marginTop:'1%',backgroundColor:'#eeeeee',marginLeft:'1%',marginRight:1}}>
    <Image source={require('./assets/Star.png')} style={styles.ImageStyle} />
 <button style={{borderRadius:'108px',marginTop:5,marginBottom:5,backgroundColor:'#fff',borderColor:'#acacac',height:35,width:100,marginRight:5}}>Mark as Gold</button>
             </View>
             <View style={{flexDirection:'row',marginTop:'1%',marginLeft:'1%',marginRight:1700}}>
 <button style={{marginTop:5,marginBottom:5,backgroundColor:'#8d1b3e',borderColor:'#8d1b3e',height:35,width:120,marginRight:5,color:'#fff',borderRadius:10}}>Register</button>
             </View>
             </View>
   
  );
}
const styles = StyleSheet.create({
    container: {
    
      flex: 1,
      backgroundColor: '#fff',
      borderRadius:'32px',
      borderColor:'#546b8a',
      borderWidth: '4px',
      marginTop:'2%',
      marginBottom:'2%',
      borderStyle:"bold",
      fontStyle:"italic",
      width:515,
      height:250,
     
  
   
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 15,
    width: 15,
    marginTop:14,
    marginLeft:15,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  ImageStyle3: {
    padding: 10,
    margin: 5,
    height: 15,
    width: 15,
    marginTop:39,
    marginLeft:30,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  Plus: {
    margin: 5,
    height: 25,
    width: 45,
    marginTop:50,
    marginLeft:35,
    marginRight:30,
    marginBottom:30,
    resizeMode : 'stretch',
  },
  Plus2: {
    margin: 5,
    height: 10,
    width: 25,
    marginTop:20,
    marginLeft:47,
    marginRight:30,
    marginBottom:10,
    resizeMode : 'stretch',
  },
  Sq: {
    margin: 5,
    height: 20,
    width: 25,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    resizeMode : 'stretch',
  },
  ImageStyle2: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    marginTop:15,
    marginLeft:20,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  
  name5inputs: {
    margin: 15,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft:20,
    width:360,
    backgroundColor:'#fff',
    paddingLeft:'10%',
    borderRadius:18,
    fontFamily:'arial',
  fontSize:15,
  marginTop:7
  
  
  },
  name4inputs: {
    margin: 15,
    height: 80,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft:20,
    width:360,
    backgroundColor:'#fff',
    paddingLeft:'10%',
    borderRadius:18,
    fontFamily:'arial',
  fontSize:15,
  marginTop:7
  
  
  },
  name3inputs: {
  margin: 15,
  height: 30,
  borderColor: '#fff',
  borderWidth: 1,
  marginLeft:20,
  width:370,
  outline:'#fff',
  backgroundColor:'#fff',
  paddingLeft:'10%',
  borderRadius:18,
  fontFamily:'arial',
  fontSize:15,
  marginTop:7
  
  
  },
  name2inputs: {
  margin: 15,
  height: 30,
  borderColor: '#fff',
  borderWidth: 1,
  marginLeft:40,
  width:360,
  backgroundColor:'#fff',
  paddingLeft:10,
  borderRadius:18,
  
  
  },
  name1inputs: {
  margin: 15,
  height: 30,
  borderColor: '#fff',
  borderWidth: 1,
  marginLeft:10,
  width:80,
  backgroundColor:'#fff',
  paddingLeft:10,
  borderRadius:18,
  
  
  },
  submitButton: {
    backgroundColor: '#8d1b3e',
    padding: 10,
    margin: 15,
    width:300,
    marginLeft:560,
   paddingLeft:80,
    height: 40,
  },
  
  EditButton: {
    backgroundColor: '#e4e7ee',
    padding: 10,
    margin: 15,
    width:200,
    paddingLeft:45,
    marginLeft:2,
    height: 40,
  },
  submitButtonText:{
    color: '#354e76'
  },
  submitButtonText2:{
  color: 'white'
  },
  buttonContainer: {
  
   paddingLeft:200,
   
  },
  MainContainer8: {
  
  margin: 15,
  marginTop:.001,
  height: 40,
  borderColor: '#fff',
  borderWidth: 2,
  marginLeft:20,
  width:355,
  backgroundColor:'#fff',
  paddingLeft:2,
  paddingRight:2,
  paddingTop:1,
  paddingBottom:1,
  borderRadius:18,
  },
  MainContainer: {
  flex:1,
  margin: 15,
  height: 70,
  borderColor: '#fff',
  borderWidth: 1,
  marginLeft:20,
  width:355,
  backgroundColor:'#fff',
  paddingLeft:10,
  borderRadius:18,
  },
  
  MainContainer2: {
  flex:1,
  margin: 15,
  height: 72,
  borderColor: '#fff',
  borderWidth: 1,
  marginLeft:20,
  width:442,
  backgroundColor:'#fff',
  paddingLeft:10,
  borderRadius:18,
  
  
  },
  MainContainer12: {
    flex:1,
    margin: 15,
    height: 70,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft:20,
    width:355,
    backgroundColor:'#fff',
    paddingLeft:10,
    borderRadius:18,
    
    
    },
  MainContainer3: {
  flex:1,
  
  margin: 15,
  height: 70,
  borderColor: '#fff',
  borderWidth: 1,
  marginLeft:20,
  width:365,
  backgroundColor:'#fff',
  paddingLeft:10,
  borderRadius:18,
  
  
  },
  
  
  selectedItemView:
  {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 14,
      backgroundColor: '#263238',
      justifyContent: 'center',
      alignItems: 'center'
  },
  
  selectedText:
  {
      fontSize: 17,
      color: '#fff'
  },
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 35,
  
    },
    scrollContentContainer: {
      paddingTop: 10,
      paddingBottom: 10,
    },
   
  });
  
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      
      width:10,
      height:20,
  
      borderColor: 'gray',
      borderRadius: 5,
      color: 'black',
     // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  
export default App;