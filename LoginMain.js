import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import Header from './Header.js'
import Footer from './Footer.js'

export default function LoginMain({navigation}) {
  return (
      <ScrollView>
      <View style={{backgroundColor:'#fff'}}>
          <Header navigation={navigation}/>

    
    <View style={styles.container1}>
   {/*  <Text style={styles.subHeading}>Vehicles</Text> */}  
   
          <View style={styles.container}>
              <View style={styles.vehiclecontainer}>
                     <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'postAdd' )}>
                          <Image style={styles.imageIcon} source={require('./assets/Car.png')}  />
                          <Text style={styles.vehicletext} >Car</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostaddSUV' )}>
                          <Image style={styles.imageIcon} source={require('./assets/SUV.png')}/>
                          <Text style={styles.vehicletext}>SUV</Text>

                          </TouchableOpacity>
                          <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostaddVan' )}>
                          <Image style={styles.imageIcon} source={require('./assets/Pickup.png')}/>
                          <Text style={styles.vehicletext}>Pick Up</Text>
                          </TouchableOpacity>
                    
                          <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostaddVan' )}>
                          <Image style={styles.imageIcon} source={require('./assets/Bus.png')}/>
                         <Text style={styles.vehicletext}>Bus</Text>
                         </TouchableOpacity>
                    
                         <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostaddVan' )}>
                       <Image style={styles.imageIcon} source={require('./assets/Van.png')}/>
                       <Text style={styles.vehicletext}>Van</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostHeavyEquipment' )}>
                       <Image style={styles.imageIcon} source={require('./assets/Heavy-Equipment.png')}/>
                       <Text style={styles.vehicletext}>Heavy Equipment</Text>

                  </TouchableOpacity>
                    
              </View>
             




              <View style={styles.vehiclecontainer}>
              <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostBike' )}>
                <Image style={styles.imageIcon} source={require('./assets/Bike.png')}  />
                <Text style={styles.vehicletext}>Bike</Text>


                </TouchableOpacity>
                <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostBicycle' )}>
                <Image style={styles.imageIcon} source={require('./assets/Bicycle.png')}/>
                <Text style={styles.vehicletext}>Bicycle</Text>


                </TouchableOpacity>
                <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostClassic' )}>
                <Image style={styles.imageIcon} source={require('./assets/Classic.png')}/>
                <Text style={styles.vehicletext}>Classic</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostaddVan' )}>
                <Image style={styles.imageIcon} source={require('./assets/Truck.png')}/>
                <Text style={styles.vehicletext}>Truck</Text>


                </TouchableOpacity>
                <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostBoat' )}>
                <Image style={styles.imageIcon} source={require('./assets/Boat.png')}/>
                <Text style={styles.vehicletext}>Boat</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.vehiclecontainerItem}  onPress={() => navigation.navigate( 'PostMore' )}>
                <Image style={styles.imageIcon} source={require('./assets/More.png')}/>
                <Text style={styles.vehicletext}>More</Text>


                </TouchableOpacity>    
              </View>
              


          </View>
          <View style={{position: 'absolute', top: width*.0000000009, left: '28%', right: 0, bottom: width*.1, backgroundColor:'#fff',width:width*.06,height:width*.01,color:'#354e76',alignItems:'center'}}>
  <Text style={{fontSize:width*.01,color:'#354e76',paddingBottom:width*.1}}>Vehicles</Text>
</View>


</View>
<br></br><br></br><br></br>
<br></br><br></br><br></br>
<br></br><br></br><br></br>
<br></br><br></br><br></br>
<Footer></Footer>
</View>
</ScrollView>
  );}
  export const { width, height } = Dimensions.get('window');
export const { width1, height1 } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: { 
    padding:width*.001,
    borderWidth:width * .002,
    borderColor:'#354e76',
    borderStyle:'solid',
    backgroundColor: '#fff', 
    height:width * .20,
    width:width*.5,
    borderTopLeftRadius: width*.015,
    borderTopRightRadius: width*.015,
    borderBottomLeftRadius: width*.015,
    borderBottomRightRadius: width*.015,
    flex:1
  },
  container1: {
   
    backgroundColor: '#fff', 
    
    alignItems:'center',
    resizeMode:'center'
    
  },
  vehiclecontainer:{
    flex:1,
    padding:width*.01,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    width:width1*.4,
    height:widthPercentageToDP('40%'),
    resizeMode:'center',
   
    
  },
  vehiclecontainerItem:{
    alignItems:'center',
    flex:1
  },
  imageIcon:{
    flex:1,
    height:width*.045,
    width:width*.045,
    
  },
  imageIcon1:{
    flex:1,
    height:heightPercentageToDP('10.5%'),
    width:widthPercentageToDP('8.5%'),
    resizeMode:'center',
  },
  vehicletext:
  {
    flex:1,
    fontSize:width*.006,
    paddingBottom:'10px',
    color:'#354e76',
    marginLeft:'6%',
    resizeMode:'center',
    height:'auto'
    
  },
  subHeading:
  {
     textAlign:'left',
     color:'#354e76',
     fontSize:22
  },
});