import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform,ScrollView ,Dimensions} from 'react-native';
import Header from './Header.js';
import Footer from './Footer.js';
import Advertisement from './Advertisement.js';
import Signin from './Signin.js';

export default class Signup extends Component
{
  constructor(props)
  {
    super(props);

    this.state = { 
      first_name:'',
      last_name:'',
      code:'+974',
      phone:'',
      password:'',
      confirm_password:'',
      hidePassword: true ,
      isLoading: false,
    }
  }


  InsertUserRecordsToServer = () =>{
    this.setState({isLoading: true});
    
      fetch('http://localhost/RNativeLaravel/api/SignUp', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
    
          first_name : this.state.first_name,
    
          last_name : this.state.last_name,
    
          code : this.state.code,
    
          phone: this.state.phone,
    
          password:this.state.password,
    
          confirm_password:this.state.confirm_password
    
        })
    
        }).then((response) => response.json())
        .then(response => {
          alert(
         response
          );
           this.setState({first_name:'',last_name:'',phone:'',password:'',confirm_password:''});
          this.props.navigation.navigate('Signin');
         
       
        })
        .catch(error => {
          this.setState({isLoading: false});
          alert(error);
        });
    
    
  }



  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  render()
  {
  return (
    <ScrollView>

 
    <View style={{backgroundColor:'#fff'}}>

   <Header navigation={this.props.navigation}/>
    <View style={{alignItems:'center',backgroundColor:'#fff'}}>
    <br></br><br></br>
    <View style={styles.container}>
    <br></br><br></br><br></br>
    <View style={styles.fixToText}>
      
            <Image
                style={styles.imageiconMain}
                source={require('./assets/logo1.png')}>
            </Image>
     
    </View>
    
    
    <br></br><br></br>
    <View style={{flexDirection:'row'}}>
    <View style={{marginLeft:'0%',flex:1,justifyContent:'center',alignItems:'center',padding:width*.02}}>
   
          <Text style={styles.signText}>SIGN UP </Text>
          <Text style={styles.paraText}>Don't have ana ccount? Sign Up  </Text><br></br>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.mobileText}>Name   </Text>
            <TextInput style = {styles. code}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               value={this.state.first_name}
               onChangeText={ first_name => this.setState({ first_name  }) }
              /><View style={{backgroundColor:'#fff',position:'absolute',top:'13%',left:'20%'}}>
                 <Text style={{fontSize:width*.007,fontFamily:'Arial'}}>  First Name  </Text>

              </View>
             
              <TextInput style = {styles.inpp}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               value={this.state.last_name}
               onChangeText={ last_name => this.setState({ last_name  }) }
               /><View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'62%'}}>
               <Text style={{fontSize:width*.007,fontFamily:'Arial'}}>  Last Name  </Text>

            </View>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.mobileText}>Mobile   </Text>
            <TextInput style = {styles. codeinputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               value={this.state
              .code}
              /><View style={{backgroundColor:'#fff',position:'absolute',top:'13%',left:'20%'}}>
                 <Text style={{fontSize:width*.007,fontFamily:'Arial'}}>  Code  </Text>

              </View>
             
              <TextInput style = {styles.inputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               value={this.state.phone}
               onChangeText={ phone => this.setState({ phone }) }
               /><View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'45%'}}>
               <Text style={{fontSize:width*.007,fontFamily:'Arial'}}>  Your Mobile Number  </Text>

            </View>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.passText}>     Password </Text>
          <View style = { styles.contai }>
        <View style = { styles.textBoxBtnHolder }>
          <br></br>
          <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.textBox }
           value={this.state.password}
           onChangeText={ password => this.setState({ password }) }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8.5%',left:'15%'}}>
               <Text style={{fontSize:width*.007,marginLeft:width*.001,fontFamily:'Arial'}}>  Password  </Text>

            </View>
            <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.textBox2}
             value={this.state.confirm_password}
             onChangeText={ confirm_password => this.setState({ confirm_password }) }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8.5%',left:'60%'}}>
               <Text style={{fontSize:width*.007,marginLeft:width*.001,fontFamily:'Arial'}}>  Confirm Password  </Text>

            </View>
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = {this.managePasswordVisibility }>
            <Image source = { ( this.state.hidePassword ) ? require('./assets/closedeye.png') : require('./assets/openeye.png') } style = { styles.btnImage } />
            
          </TouchableOpacity>
        </View>
         </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:'5%',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:width*.007,fontFamily:'Arial'}}>
        Forgot your Password???</Text>
       
      </View>
      <br></br>
      <View style={{flexDirection:'row',marginLeft:'5%',flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style = {styles.buttonContainer}>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.InsertUserRecordsToServer.bind(this)}
               >
               <Text style = {styles.submitButtonText}> Register </Text>
               
            </TouchableOpacity>
           
           </View> 
           </View>
           </View>
     

         
    
     
  
      
      </View>
      
      
   </View>
   
    </View>
    <br></br><br></br><br></br>
    <Advertisement />
<Footer />
    </View>
    </ScrollView>
  );
}
}
export const { width, height}= Dimensions.get('window'); 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     borderRadius: width*.017,
    borderWidth: width*.002,
    width:width*.5,
    height:width*.400,
    borderColor:'#8d1b3e',
    borderStyle:"medium",
    fontStyle:"italic",
  },
  
  headingText:{
    color :'#354e76',
    fontStyle:'bold',
    fontSize:50,
    alignContent:'left',
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imageiconMain:{
    width: width*.112,
    height: width*.04,
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileText:{
    color :'#354e76',
    fontStyle:"Times new roman",
   marginLeft:width*.01,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:width*.008,
    marginTop:'4%'
    ,fontFamily:'Arial'
    
  },
  
 codeinputs: {
    margin: 15,
    height: width*.022,
    borderColor: '#000',
    borderWidth: 1,

    width:width*.065,
    marginLeft:width*.02
  
  
  },
  inputs: {
    margin: 15,
    height: width*.022,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft:10,
    width:width*.19,

  
  },
  code: {
    margin: 15,
    height: width*.022,
    borderColor: '#000',
    borderWidth: 1,
 flex:2,
    width:width*.065,
    marginLeft:width*.02
  
  
  },
  inpp: {
    margin: 15,
    height: width*.022,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft:10,
    width:width*.19,
    flex:2,
  
  },
 passText:{
    color :'#354e76',
    
    fontSize:width*.008,
    marginLeft:width*.015
    ,fontFamily:'Arial'
  },
  contai:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft:width*.03,
    paddingHorizontal: 10,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  textBoxBtnHolder:
  {
  
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  textBox: {
    margin: 15,
    height: width*.022,
    borderColor: '#000',
    borderWidth: 1,
 flex:2,
    width:width*.065,
    marginLeft:width*.02
  
  
  },
  textBox2: {
    margin: 15,
    height: width*.022,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft:10,
    width:width*.19,
    flex:2,
  
  },
  
  visibilityBtn:
  {
    
    // left: width*.3,
    height: 40,
    width: 35,
    marginTop:10
   
  },
  visibilityBtn2:
  {
    
    // left: 620,
    height: 40,
    width: 35,
    padding: 5,
    
    marginLeft:22
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: width*.02,
    width: width*.02,
    // top:'10%',
    // left:width*.007
  },
  submitButton: {
    backgroundColor: '#8d1b3e',
    padding: 10,
 alignItems:'center',
 justifyContent:'center',
    width:width*.04,
   
    height:width*.02
 },
 
 submitButtonText:{
    color: 'white',
    fontSize:width*.007
 },
  connecticonMain:{
    flex:1,
    resizeMode:'center',
    width: 290,
    height: 60,
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
  },
  

  paraText:{
    color :'#354e76',
    fontStyle:"Times new roman",
    justifyContent: 'space-between ',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:width*.007,
    flex:1
    ,fontFamily:'Arial'
    
    
  },
 
  
 
  signText:{
    flexDirection:'column',
    alignItems:'center',
    fontStyle:'bold',
    fontSize:width*.01,
    color :'#8d1b3e',
    justifyContent:'center',
    flex:1
    ,fontFamily:'Arial'
  },
  
  Vertical:{
    color:'#8d1b3e',
  
    width:'100%',
    border:'center',
    borderColor:'#8d1b3e',
    
    backgroundColor: '#8d1b3e',
    // paddingLeft:1360,
    marginLeft:0,
    borderWidth:'6.2px',
    borderStyle:"medium",
    fontStyle:"italic",
    borderBottomLeftRadius:'3px'

  },
  Vertical2:{
    color:'#8d1b3e',

    width:'100%', width:'100%',
    border:'center',
    borderColor:'#354e76',

    backgroundColor: '#354e76',
    // paddingLeft:1366,
    marginLeft:0,
    borderWidth: '4px',
    borderStyle:"medium",
    fontStyle:"italic",

  },
  Vertical3:{
    color:'#8d1b3e',
   
    width:'100%',
    border:'center',
    borderColor:'#fdba45',
   
    backgroundColor: '#fdba45',
    // paddingLeft:1364,
    marginLeft:0,
    borderWidth: '5px',
    borderStyle:"medium",
    fontStyle:"italic",

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between ',
    alignItems: 'center',
    justifyContent: 'center',
    color :'#354e76',
    
  },
  fixToTextbox:{
    flexDirection:'row',
    

  },
 
  
});