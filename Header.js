 {/*Header*/}
 import * as React from 'react';
import { StyleSheet, Text, View ,Image ,Button,SafeAreaView,Dimensions, PixelRatio,TouchableOpacity} from 'react-native';
import SearchBar from './Searchbar.js';
import {widthPercentageToDP , heightPercentageToDP } from 'react-native-responsive-screen';
import handleClick from './Home.js';
import { TouchableHighlight } from 'react-native-gesture-handler';





export default function Header({navigation}) {


 
  return ( 
    
      <View style={{flex:1}}>
       
        <View style={{flex:1,padding:10,flexDirection:'row',justifyContent:'space-between'}}>       
         {/*Language Switcher */}
                <View >
                
              <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source={require('./assets/homeIcon.png')} style={styles.profileicon}></Image>
              </TouchableOpacity>
      
                </View>
          {/*Sign in /Sign up */}
              <View style={styles.viewcontent}>
                <Image style={styles.profileicon} source={require('./assets/Profile.png')} ></Image>
                  <View style={styles.viewcontent1}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                    <Text style={{fontSize:width*.008,fontFamily:'Arial'}}>Sign In</Text>
                    </TouchableOpacity>
                        <Text style={{fontSize:width*.007}}>/</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{fontSize:width*.008,fontFamily:'Arial'}}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                  
                  

                </View>

          </View>
       {/*Navigation drawer ,main icon and name of the project*/}
        <View style={styles.fixToText}>
          {/* <View style={{flex:1}}></View> */}
              <a href="#"><View style={styles.navi}>
                <View style={styles.nav}></View>
                <View style={styles.nav}></View>
                <View style={styles.nav}></View>
              </View></a>
              <Image 
                style={styles.imageiconMain}
                source={require('./assets/logoMain.png')}>
            </Image>
            <SearchBar />            
            {/*Search View */}
            
            {/*Post Add icon */}
           <TouchableOpacity onPress={()=>navigation.navigate('LoginMain')} style={styles.postAdcontainer}>
            
                <Text style={{resizemode:'center',color :'#354e76',fontSize:width*.009,fontFamily:'Arial'}}>Post Ad</Text>
           </TouchableOpacity>
            
             {/*Main icons of notification , location and chat */}
            
            <View style={
              {flex:2,justifyContent:'space-between'}
            }>

            <View style={
              {flex:1,marginTop:8,flexDirection:'row',marginLeft:width*0.01}}>
                <TouchableOpacity style={{alignItems:'center',flex:1}}>
                <Image 
                style={styles.imageicon}
                source={require('./assets/Notification.png')}>
              </Image>
              <Text style={{fontSize:width*.008,flex:1,fontFamily:'Arial'}}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',flex:1}}>
                <Image 
                style={styles.imageicon}
                source={require('./assets/NearMe.png')}>
               </Image>
               <Text style={{fontSize:width*.008,fontFamily:'Arial'}}>Near Me</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',flex:1}}>
                <Image 
                style={styles.imageicon}
                source={require('./assets/Chat.png')}>
              </Image>
              <Text style={{fontSize:width*.008,fontFamily:'Arial'}}>Chat</Text>

                </TouchableOpacity>
              
              
              </View><br></br>
               
              </View>
            </View> 
    <br></br>
     
      <View  
      >
         {/*Separator */}
         
         <Separator />
         <Separator2 />

          <Separator1 />
         
        
      </View><br></br>
      </View>
   
    
  );
            
}
function Separator() {
  return <View style={styles.separator} />;
}
function Separator2() {
  return <View style={styles.separator2} />;
}
function Separator1() {
  return <View style={styles.separator1} />;
}
export const { width, height}= Dimensions.get('window'); 
const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'space-between',
  },
  imageiconMain:{
    
    height:width*.06,
    width:width*.004,
    flex:1,
    resizeMode:'contain',
    marginLeft:width*.01,
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between ',
    alignItems:'center',
    flex:1,
    paddingLeft:width*.01
    
    
  },
  separator: {
    
    borderBottomColor: '#354e76',
    borderBottomWidth: width*.006,
  },
  separator2: {
    
    borderBottomColor: '#f4bd5a',
    borderBottomWidth: width*.006,
  },
  separator1: {
   
    borderBottomColor: '#8d1b3e',
    borderBottomWidth:  width*.006,
  },
  imageicon:{
    width: width*.03,
    height: width*.03,
    justifyContent:'right',
    paddingLeft:width*.01,
    flex:1
  },
  viewcontent:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#dcdcdc',
    height:width*.025,
    width:width*.1,
    marginLeft:5,
    marginRight:widthPercentageToDP('1%'),
    borderTopLeftRadius: width*.08,
    borderTopRightRadius: width*.08,
    borderBottomLeftRadius: width*.08,
    borderBottomRightRadius:width*.08,
  },
  viewcontent1:{
    justifyContent:'flex-end',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#fff',
    padding:5,
    color:'#354e76',
    height:width*.021,
    width:width*.07,
    marginLeft:5,
    marginRight:3,
    borderTopLeftRadius: width*.08,
    borderTopRightRadius:width*.08,
    borderBottomLeftRadius: width*.08,
    borderBottomRightRadius: width*.08

  },
  profileicon:{
    width: width*.0195,
    height: width*.02,
    backgroundColor:'transparent',
    
   
  },
  postAdcontainer:
  {
   
    resizeMode:'cover',
    height: width*.025,
    width: width*.08,
    flexDirection:'row',
    borderColor:'#dcdcdc',
    marginLeft:width*.01,
    borderWidth:width * .001,
    justifyContent:'flex-start',
    borderTopLeftRadius: width*.08,
    borderTopRightRadius: width*.08,
    borderBottomLeftRadius: width*.08,
    borderBottomRightRadius: width*.08,
    justifyContent:'center',
    alignItems:'center',
    flex:1

  },
  nav:
  {
    width:width*.02,
    backgroundColor:'#aa6c7e',
    height:width*.003,
    paddingLeft:width*.01,
    paddingRight:width*.01
  },
  navi:
  {
    flexDirection:'column',
    justifyContent:'space-between',
    width:width*.02,
    height:width*.02,
    flex:1
    
  }
 
});
 {/*End of Header*/}