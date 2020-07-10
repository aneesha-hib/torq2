import React from 'react'
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,TouchableOpacity

} from 'react-native'


// const scroller=React.createRef(<ScrollView/>)
export const {width}=Dimensions.get('window');

export default class  AdvertisementComponents extends React.Component{

  scrollToRight=()=>{
 
    this.scroller.scrollTo({x: width, y: 0,animated: true});
   
  
};
scrollToLeft=()=>{
 
  this.scroller.scrollTo({x: -500, y: 0});
 

};
  render(){

    
  

 
   return(
     <View style={styles.container}>
      
       <TouchableOpacity onPress={this.scrollToLeft } style={{backgroundColor:'#fff',height:width*.185,width:width*.015,alignItems:'center',justifyContent:'center'}}>
       <Image source={require('./assets/leftarrow.png')} style={styles.iconImage} />
        
       </TouchableOpacity>
      
         <ScrollView
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         snapToAlignment={"start"}
         ref={(scroller) => {this.scroller = scroller}}
         >
         
     

                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 
                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 


                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 

                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 

                     <View style={styles.featuredAdContainerIndividual}>
                            <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage}></Image><br/>
                                <View style={styles.addDetails}>
                                    <Text style={styles.vehicleName}>Land Rover - Discovery</Text>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Year.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>2014</Text>
                                            <Image source={require('./assets/Milage.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>52,000</Text>

                                        </View>
                                        <View style={styles.featuredAdDetails1}>
                                            <Image source={require('./assets/Price.png')} style={styles.iconImage}></Image>
                                            <Text style={styles.featuredAdDetails2}>32,000 QR</Text>
                                    

                                        </View>

                                </View>

                     </View> 


          </ScrollView>  
          <TouchableOpacity  onPress={this.scrollToRight} style={{backgroundColor:'#fff',height:width*.185,width:width*.015,alignItems:'center',justifyContent:'center'}}>
       <Image source={require('./assets/rightarrow.png')} style={styles.iconImage} />
        
       </TouchableOpacity>
      
         
     </View>
   )}
 
}

const styles=StyleSheet.create(
  {
    container :
    {
      width:width*.6,
      flex:1,
      flexDirection:'row',
     

    },
    
    vehicleName:{
      color:'#354e76',
      fontSize:width*.009,
      marginBottom:'2%'
      ,fontFamily:'Arial'

  },
  featuredAdContainerIndividual:
  {
      height:'auto',
      width:'auto',
      marginLeft:5
  },
  adImage:
  {
      width:width*.195,
      height:width*.121,
      borderTopLeftRadius: width*.0085,
      borderTopRightRadius:  width*.0085,
      borderBottomLeftRadius:  width*.0085,
      borderBottomRightRadius:  width*.0085
  },
  addDetails:
  {
    width:width*.195,
    height:'auto',
    backgroundColor:'#e4e6ed',
    borderTopLeftRadius:  width*.0085,
    borderTopRightRadius:  width*.0085,
    borderBottomLeftRadius:  width*.0085,
    borderBottomRightRadius:  width*.0085,
    padding:2
  },
  featuredAdDetails1:
  {
    height:width*.02,
    width:'100%' ,
    alignItems:'left',
    flexDirection:'row',
    
  },
  featuredAdDetails2:
  {
    fontSize:width*.008,
    color:'#354e76',
  
    marginRight:'2%'
    ,fontFamily:'Arial'
  },
  iconImage:
  {
      height:width*.015,
      width:width*.015,
      marginRight:'2%'
  },
  }
)

