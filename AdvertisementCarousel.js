import React ,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";
import Swiper from "react-native-web-swiper";


const styles = StyleSheet.create({
    container: {
        
       height:200,
       width:'50%',
      justifyContent:'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20, 
     

        
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "#dcdcdc"
    },
    slide2: {
        backgroundColor: "#dcdcdc"
    },
    slide3: {
        backgroundColor: "#dcdcdc"
    },
    container1: {
        height:100,
        width:'100%',
        backgroundColor: '#a1a9bc',
        justifyContent: 'center',
        alignItems:'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection:'row'
      },
      textAdvertisement:
  {
      color:'#354e76',
      fontSize:18
  },
  featuredAdContainerIndividual:
  {
      height:'auto',
      width:'auto',
      marginLeft:5
  },
  adImage:
  {
      width:300,
      height:200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
  },
  addDetails:
  {
    width:300,
    height:'auto',
    backgroundColor:'#e4e6ed',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding:2
  },
  vehicleName:{
    color:'#354e76',
    fontSize:14,
    marginBottom:'2%'

},
featuredAdDetails1:
  {
    height:'auto',
    width:'100%' ,
    alignItems:'left',
    flexDirection:'row',
    
  },
  featuredAdDetails2:
  {
    fontSize:10,
    color:'#354e76',
    marginTop:15,
    marginRight:'2%'
    
  },
  featuredAdContainerItems:
  {
      flexDirection:'row',
      width:'100%',
      height:'auto',
    
  },
});

export default class AdvertisementCarosel extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                <View style={styles.featuredAdContainerItems}>
                        <View style={styles.featuredAdContainerIndividual}>
                            {/* <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/> */}
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    {/* <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    {/* <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    {/* <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                        </View>

                        <View style={styles.featuredAdContainerIndividual}>
                            {/* <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/> */}
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    {/* <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    {/* <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    {/* <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                        </View>

                        <View style={styles.featuredAdContainerIndividual}>
                            {/* <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/> */}
                            <View style={styles.addDetails}>
                                <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                <View style={styles.featuredAdDetails1}>
                                    {/* <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>2014</Text>
                                    {/* <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>52,000</Text>

                                </View>
                                <View style={styles.featuredAdDetails1}>
                                    {/* <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image> */}
                                    <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                </View>

                            </View>
                        </View>
               </View>
            


            
                </Swiper>
            </View>
        )
    }
}