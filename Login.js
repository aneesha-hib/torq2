import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Platform,ScrollView ,Dimensions} from 'react-native';
import Header from './Header.js';
import Footer from './Footer.js';
import Advertisement from './Advertisement.js';

export default class Login extends Component
{
  constructor()
  {
    super();

    this.state = { hidePassword: true }
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
    <View style={styles.container}>
    <br></br><br></br>
    <View style={styles.fixToText}>
      
            <Image
                style={styles.imageiconMain}
                source={require('./assets/logo1.png')}>
            </Image>
     
    </View>
    
    
    <br></br><br></br><br></br><br></br>
    <View style={{flexDirection:'row'}}>
    <View style={{marginLeft:'0%',flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.signText}>SIGN IN </Text>
          <Text style={styles.paraText}>Enjoy with our services now  </Text><br></br>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.mobileText}>Mobile  </Text>
            <TextInput style = {styles. codeinputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
              /><View style={{backgroundColor:'#fff',position:'absolute',top:'13%',left:'18%'}}>
                 <Text style={{fontSize:width*.007}}>  Code  </Text>

              </View>
             
              <TextInput style = {styles.inputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               /><View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'45%'}}>
               <Text style={{fontSize:width*.007}}>  Your Mobile Number  </Text>

            </View>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.passText}>  Password  </Text>
          <View style = { styles.contai }>
        <View style = { styles.textBoxBtnHolder }>
          <br></br>
          <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.textBox }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'15%'}}>
               <Text style={{fontSize:width*.007,marginLeft:width*.001}}>  Password  </Text>

            </View>
           
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
            <Image source = { ( this.state.hidePassword ) ? require('./assets/closedeye.png') : require('./assets/openeye.png') } style = { styles.btnImage } />
            
          </TouchableOpacity>
        </View>
         </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:'5%',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:width*.007}}>
        Forgot your Password???</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:'5%',flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style = {styles.buttonContainer}>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
               
            </TouchableOpacity>
           
           </View> 
           </View>
           </View>
      <Image 
         
         style={styles.connecticon2Main}
         source={require('./assets/line.png')}>
     </Image>



     <View style={{marginLeft:'0%',flex:1,padding:width*.02}}>
       <View style={{alignItems:'center',flex:1}}>
       <Text style={styles.signText}>SIGNUP</Text>
     <Text style={styles.paraText}>Don't have an account?Sign Up</Text>
       </View>
     
     <br></br>
     <View style={{flexDirection:'row',flex:1}}>
      
       <Text style={styles.nameText}>Name  </Text>

       
       
     <TextInput style = {styles. nameinputs}
               underlineColorAndroid = "transparent"
               
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
           />
           <View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'22%'}}>
                 <Text style={{fontSize:width*.007}}>  First Name  </Text>

              </View>
            <TextInput style = {styles. name2inputs}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
           />
           <View style={{backgroundColor:'#fff',position:'absolute',top:'9%',left:'63%'}}>
                 <Text style={{fontSize:width*.007}}>  Last Name  </Text>

              </View>
          </View>
          <View style={{flexDirection:'row',flex:1}}>
          <Text style={styles.nameText}>Mobile  </Text>
          <TextInput style = {styles. codeinputs1}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
           />
            <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'22%'}}>
               <Text style={{fontSize:width*.007}}>  Code  </Text>
            </View>
            <TextInput style = {styles.inputs2}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#8d1b3e"
               autoCapitalize = "none"
               />
                <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'42%'}}>
               <Text style={{fontSize:width*.007}}>  Your Mobile Number  </Text>
            </View>
             
          </View>
          <View style={{flexDirection:'row',flex:1}}>
          <Text style={styles.nameText}>Password  </Text>
          <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.pnameinputs }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'22%'}}>
               <Text style={{fontSize:width*.007}}>  Password  </Text>
            </View>
          <TextInput underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.pname2inputs }/>
          <View style={{backgroundColor:'#fff',position:'absolute',top:'8%',left:'60%'}}>
               <Text style={{fontSize:width*.007}}>  Confirm Password  </Text>
            </View>
           
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn2 } onPress = { this.managePasswordVisibility }><br></br>
            <Image source = { ( this.state.hidePassword ) ? require('./assets/closedeye.png') : require('./assets/openeye.png') } style = { styles.btnImage } />
            
          </TouchableOpacity>
          </View>
          <br></br>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          
            <TouchableOpacity
               style = {styles.registerButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               
               <Text style = {styles.submitButtonText}> Register </Text>
               
            </TouchableOpacity>
           
      
          
             
          </View>
     </View>
     
  
      
      </View>
     <View
      style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
     <View style = {styles.Vertical2}>
           
           
           </View>
           <View style = {styles.Vertical3}>
                   
            
         </View>
              <View style = {styles.Vertical}>
                   
                     </View>
      </View>
      
   </View>
   
    </View><br></br><br></br>
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
    borderWidth: width*.004,
    width:width*.8,
    height:width*.428,
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
    width: width*.2,
    height: width*.07,
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
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
  connecticon2Main:{
    width: width*.002,
    height: width*.18,
    marginLeft:'0%',
    justifyContent:"space-between",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:width*.01
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

  paraText:{
    color :'#354e76',
    fontStyle:"Times new roman",
    justifyContent: 'space-between ',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:width*.01,
    flex:1
 
    
    
  },
  mobileText:{
    color :'#354e76',
    fontStyle:"Times new roman",
   marginLeft:width*.01,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:width*.008,
    marginTop:'4%',
    
    
  },
  nameText:{
    color :'#354e76',
    fontStyle:"Times new roman",
   marginLeft:width*.001,
  alignSelf:'stretch',

  alignItems: 'center',
  justifyContent: 'center',
   fontSize:width*.008,
    marginTop:'4%',
    
    
  },
  passText:{
    color :'#354e76',
    fontStyle:"Times new roman",
    fontSize:width*.008,
    marginLeft:width*.015
  },
  signText:{
    flexDirection:'column',
    alignItems:'center',
    fontStyle:'bold',
    fontSize:width*.02,
    color :'#8d1b3e',
    justifyContent:'center',
    flex:1
    
  },
  lineVertical:{
    border:'left',
    borderColor:'solid green',
    height:'500px',

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
  containers: {
  
   paddingLeft:10,
    
 },
 inputs: {
    margin: 15,
    height: width*.022,
    borderColor: '#000',
    borderWidth: 1,
    width:width*.19,
    background: '#600',
    padding: '20px', 
    marginLeft:width*.001,
   
    paddingLeft:10,
 
 },
 inputs2: {
  margin: 15,
  height: width*.022,
  borderColor: '#000',
  borderWidth: 1,
  width:width*.15,
 flex:3,
  // background: '#600',
  padding: '20px', 
  marginLeft:1,
  paddingLeft:10,
  height: '15px',

},
 codeinputs: {
  margin: 15,
  paddingLeft:width*.001,
  height: width*.022,
  width:width*.065,
  borderColor: '#000',
  borderWidth: 1,
  flex:1,
  resizeMode:'center',

},
codeinputs1: {
  margin: 15,
  height: width*.022,
  width:width*.065,
  borderColor: '#000',
  borderWidth: 1,
  flex:1,
  resizeMode:'center',
  marginLeft:width*.015
},
nameinputs: {
  margin: 15,
  height: width*.022,
  borderColor: '#000',
  borderWidth: 1,
flex:2,
  width:width*.1,
  marginLeft:width*.02


},
name2inputs: {
  margin: 15,
  height: width*.022,
  borderColor: '#000',
  borderWidth: 1,
  marginLeft:10,
  width:width*.1,
  
 flex:2

},
pnameinputs: {
  margin: 13,
  height: width*.022,
  borderColor: '#000',
  borderWidth: 1,
flex:2,
  width:width*.1,
//  marginLeft:width*.025


},
pname2inputs: {
  margin: 15,
  height: width*.022,
  borderColor: '#000',
  borderWidth: 1,
  
  width:width*.2,
  paddingLeft:10,
  flex:2
 

},
name3inputs: {
  margin: 15,
  height: 40,
  borderColor: '#000',
  borderWidth: 1,

  width:290,
  paddingLeft:10,
  borderRadius: '18px',

},
signupCode:{
  margin:15,
  height:40,
  borderColor:'#000',
  borderWidth:1,
 
  width:150,
  paddingLeft:10,
  borderRadius:'18px',

},
passwordinputs:{
  margin:15,
  height:40,
  borderColor:'#000',
  borderWidth:1,
  width:580,
  paddingLeft:10,
  borderRadius: '18px',
},
 submitButton: {
    backgroundColor: '#8d1b3e',
    padding: 10,
 alignItems:'center',
 justifyContent:'center',
    width:width*.04,
   
    height:width*.02
 },
 registerButton: {
  backgroundColor: '#8d1b3e',
  padding: 10,
  justifyContent:'center',
  width:width*.04,
  
  height:width*.02,
 alignItems:'center'
},
 submitButtonText:{
    color: 'white',
    fontSize:width*.007
 },
 buttonContainer: {
    
   
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

  textBox:
  {
  //   height: width*.022,
  //  width:width*.2,
  //   paddingLeft: width*.3,
  //   borderWidth: 1,
  //   paddingVertical: 0,
  //   borderColor: '#000',
  margin: 15,
  height: width*.022,
  borderColor: '#000',
  borderWidth: 1,
  // marginLeft:10,
  width:width*.26,
  // paddingLeft:10,
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
  }
  
});