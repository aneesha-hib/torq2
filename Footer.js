{/*Footer*/}
import React from 'react';
import { StyleSheet, Text, View ,Image,SafeAreaView, Linking, Dimensions} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


export default function Footer() {
  return (
    <SafeAreaView
    >
        
         {/*Section 1 */}
        {/*Separater */}
            <View style={styles.footerLink}>
             <Text style={styles.footerLinkText} onPress={()=>Linking.openURL("")}>Home</Text>
             <Text style={styles.footerLinkText} onPress={()=>Linking.openURL("")}>About Us</Text>
             <Text style={styles.footerLinkText} onPress={()=>Linking.openURL("")}>Terms & Privacy</Text>
             <Text style={styles.footerLinkText} onPress={()=>Linking.openURL("")}>Blog</Text>
             <Text style={styles.footerLinkText} onPress={()=>Linking.openURL("")}>24x7 Help </Text>
            <View style={{width:width*.35}}></View>
             <Image style={styles.imageIcon} source={require('./assets/flogo.png')}></Image>
             <Text>&nbsp;&nbsp;&nbsp;</Text>
             <Image style={styles.imageIcon} source={require('./assets/inlogo.png')}></Image>
            </View>

        <View style={{flex:1,justifyContent:'space-between',flexDirection:'column'}}>
         {/*Section 2 */}
            <View style={
                {flexDirection:'row',flex:1,justifyContent:'space-between'}               
            }> 
            {/*Main Links */}
                <View style={{padding:15}}>
                   

                </View>
            {/*Social Media Links*/}
            
            {/* <View style={{padding:25}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.links}>Instagram&nbsp;</Text>
                        <Image style={styles.imageIcon} source={require('./assets/instagram.jpg')}></Image>


                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.links}>Facebook&nbsp;</Text>
                        <Image style={styles.imageIcon} source={require('./assets/facebook.png')}></Image>

                    </View>

               

            </View> */}
               

            </View>
         {/*Section 3*/}
        
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:'#354e76',fontSize:width*.011,fontFamily:'Arial'}}>Copyright 2020 Torq.qa</Text>
              <View style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
              <Image style={styles.imageIcon} source={require('./assets/logo.png')}></Image>
                <Text style={{color:'#354e76',fontSize:width*.011,fontFamily:'Arial'}}>&nbsp;TorQ</Text>

              </View>
                

              
              <View style={{flexDirection:'row'}}>
                  <Text style={{color:'#354e76',fontSize:width*.011,fontFamily:'Arial'}}>Available on </Text>
                  
                  <Image style={styles.imageIcon} source={require('./assets/googleplaystore.png')}></Image>
                  <Text>&nbsp;&nbsp;&nbsp;</Text>

                  
                  <Image style={styles.imageIcon} source={require('./assets/applestore.jpg')}></Image>
                  <Text>&nbsp;&nbsp;</Text>

              </View>
              

            </View>
            
        </View>
    </SafeAreaView>
    
  );
}

function Separator() {
    return (<View style={styles.separator} >

     

    </View>);
  }
export const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 2,
    borderBottomColor: '#384a73',
    borderBottomWidth: 40,
    flex:1,
    flexDirection:'row'
    
    
  },
  bottom: {
    position: 'absolute',
  bottom:0
  },
  links:
  {
      fontSize:width*.008,
      color:'#354e76'
  },
  imageIcon:
  {
      backgroundColor:'transparent',
      width:width*.01,
      height:width*.010,
     
  },fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between ',
  },
  playstore:{
    flexDirection:'row',
    backgroundColor:'#dcdcdc',
    padding:width*.001,
    height:width*.015,
    marginLeft:5,
    alignItems:'center',
    borderTopLeftRadius: width*.04,
    borderTopRightRadius: width*.04,
    borderBottomLeftRadius:width*.04,
    borderBottomRightRadius: width*.04
  },
  footerLink:
  {
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#37486c',
    height:width*.02,
    paddingLeft:width*.07,
    paddingRight:width*.1
  },
  footerLinkText:
  {
    color:'#fff',
    marginRight:25,
    fontSize:width*.01,
    fontStyle:'bold',
    flex:1,
    fontFamily:'Arial'
  }
});
