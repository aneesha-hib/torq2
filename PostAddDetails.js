import React from 'react'
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,TouchableOpacity
} from 'react-native'
import Header from'./Header.js';
import Footer from'./Footer.js';
import Refresh from './Refresh.js';
import AdImage1 from './assets/AdImage1.jpg';
import car1 from './assets/car1.jpg';
import car4 from './assets/car4.jpg';
import car5 from './assets/car5.jpg';
import car3 from './assets/car3.jpg';
// const scroller=React.createRef(<ScrollView/>)
export const {width}=Dimensions.get('window');

export default class  AdvertisementComponents extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      imageMain:AdImage1
    }
  }


  scrollToRight=()=>{
 
    this.scroller.scrollTo({x: width, y: 0,animated: true});
   
  
};
scrollToLeft=()=>{
 
  this.scroller.scrollTo({x: -500, y: 0});
 

};

  render(){

    let { image } = this.state;
  

 
   return(
    <ScrollView>


    <View style={{backgroundColor:'#fff'}}>
 
   <Header navigation={this.props.navigation} />
   <Refresh></Refresh>
   <br></br>
   <View style={{flexDirection:'row'}}>
     <View>
   <Image source={this.state.imageMain } style={styles.adImage2} />
   </View>
   <View style={{marginLeft:'9%',marginTop:'12%'}}>
   <View>
   <Image source={require('./assets/phone.png')} style={styles.iconImage2} />
   </View><br></br>
   <View>
   <Image source={require('./assets/whats.png')} style={styles.iconImage2} />
   </View><br></br>
   <View>
   <Image source={require('./assets/flag.png')} style={styles.iconImage2} />
   </View><br></br>
   <View>
   <Image source={require('./assets/ex.png')} style={styles.iconImage2} />
   </View>
   
   </View>
  </View>
   {/* <Image source={require('./assets/AdImage1.jpg')} style={styles.adImage2}></Image> */}
   <br></br>
     <View style={styles.container}>
     
       <TouchableOpacity onPress={this.scrollToLeft } style={{backgroundColor:'#fff',height:width*.05,width:width*.015,alignItems:'center',justifyContent:'center'}}>
       <Image source={require('./assets/leftarrow.png')} style={styles.iconImage} />
        
       </TouchableOpacity>
      
         <ScrollView
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         snapToAlignment={"start"}
         ref={(scroller) => {this.scroller = scroller}}
         >
         
     

                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:AdImage1}))}  >
                            <Image source={AdImage1} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:car1}))}  >
                            <Image source={car1} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:car4}))}  >
                            <Image source={car4} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:car5}))}  >
                            <Image source={car5} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:car3}))}  >
                            <Image source={car3} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:car4}))}  >
                            <Image source={car4} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:car5}))}  >
                            <Image source={car5} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
                     <TouchableOpacity style={styles.featuredAdContainerIndividual} onPress={()=>(this.setState({imageMain:car3}))}  >
                            <Image source={car3} style={styles.adImage}  ref={(image1) => {this.image1 = image1}} ></Image><br/>

                     </TouchableOpacity> 
          </ScrollView>  
          <TouchableOpacity  onPress={this.scrollToRight} style={{backgroundColor:'#fff',height:width*.05,width:width*.015,alignItems:'center',justifyContent:'center'}}>
       <Image source={require('./assets/rightarrow.png')} style={styles.iconImage} />
        
       </TouchableOpacity>
      
         
     </View>
     <View style={styles.container1}>
     <View style={{flexDirection:'row',marginTop:'4%',marginLeft:'5%',marginRight:'15%'}}>
  <View>
  <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price</Text>
                 <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'3%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
                 <Image source={require('./assets/dollar-tag.png')} style={styles.Plus} />
               
                 {image && <Image source={{ uri: image }} style={styles.Plus2} />}
                 </View>
    </View>  
    <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category</Text>
      <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
    
                 <Image source={require('./assets/More.png')} style={styles.Plus} />
               
        {image && <Image source={{ uri: image3 }} style={styles.Plus2} />}
      </View>
      </View>
      <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertise Type</Text>
      <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
    
                 <Image source={require('./assets/Hone.jpg')} style={styles.Plus} />
               
        {image && <Image source={{ uri: image3 }} style={styles.Plus2} />}
      </View>
      </View>
      <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City</Text>
      <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
     
                 <Image source={require('./assets/city.jpg')} style={styles.Plus} />
               
        {image && <Image source={{ uri: image4 }} style={styles.Plus2} />}
      </View>
      </View>
      <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Motor Type</Text>
              <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
    
    <Image source={require('./assets/type.png')} style={styles.Plus} />
  
{image && <Image source={{ uri: image3 }} style={styles.Plus2} />}
</View>
</View>
<View>
<Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Model</Text>
<View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>

    <Image source={require('./assets/model.jpg')} style={styles.Plus} />
  
{image && <Image source={{ uri: image4 }} style={styles.Plus2} />}
</View>
      </View>
      </View>
      {/* next row starting */}
      <View style={{flexDirection:'row',marginTop:'4%',marginLeft:'5%',marginRight:'15%',marginBottom:'5%'}}>
      <View>
  <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Views</Text>
                 <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'3%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
                 <Image source={require('./assets/view.jpg')} style={styles.Plus} />
               
                 {image && <Image source={{ uri: image }} style={styles.Plus2} />}
                 </View>
    </View>  
    <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture Year</Text>
      <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
    
                 <Image source={require('./assets/year.jpg')} style={styles.Plus} />
               
        {image && <Image source={{ uri: image3 }} style={styles.Plus2} />}
      </View>
      </View>
      <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kiilometer</Text>
      <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
    
                 <Image source={require('./assets/km.jpg')} style={styles.Plus} />
               
        {image && <Image source={{ uri: image3 }} style={styles.Plus2} />}
      </View>
      </View>
      <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conditions</Text>
      <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
     
                 <Image source={require('./assets/condition.png')} style={styles.Plus} />
               
        {image && <Image source={{ uri: image4 }} style={styles.Plus2} />}
      </View>
      </View>
      <View>
      <Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guarentee</Text>
              <View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>
    
    <Image source={require('./assets/gur.jpg')} style={styles.Plus} />
  
{image && <Image source={{ uri: image3 }} style={styles.Plus2} />}
</View>
</View>
<View>
<Text Style={{fontFamily:'arial',fontSize:14}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Model</Text>
<View style={{flex:1,backgroundColor:'#fff',borderRadius:'8px',Height:'50%',Width:'50%',marginTop:'1%',marginLeft:30,marginRight:40,marginBottom:10,borderColor:'#dcdcdc',borderWidth:2}}>

    <Image source={require('./assets/model1.jpg')} style={styles.Plus} />
  
{image && <Image source={{ uri: image4 }} style={styles.Plus2} />}
</View>
      </View>
      </View>
      {/* <View style={{backgroundColor:'#fff',position:'absolute',top:'.005%',left:'22%',height:}}>
                 <Text style={{fontSize:width*.02}}>  Details  </Text>

              </View> */}
      </View>
     
      <View style={styles.container1}>
        <View style={{flexDirection:'row',marginTop:'4%',marginLeft:'5%',marginRight:'15%',marginBottom:'5%',alignItems:'center'}}>
      <View>
  <Text  Style={{fontFamily:'arial',fontSize:14}} >Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles,<br></br> making them progressively more complex,
  but also more reliable and easier to operate.[citation needed] These include rear reversing cameras, air conditioning, <br></br>navigation systems, and in-car entertainment. Most cars in use the 2010s are propelled
 by an internal combustion engine, fueled by the combustion of fossil fuels. <br></br>Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted 
   to cost less to buy than gasoline cars<br></br> before 2025.[4][5]</Text>
 
        </View>
      </View>
      </View>
      </View>
      <Footer></Footer>
     </ScrollView>
   )}
 
}

const styles=StyleSheet.create(
  {
    container :
    {
      width:width*.3,
      flex:1,
      flexDirection:'row',
      marginLeft:'36%'
     

    },
    container1: {
  
      flex: 1,
      backgroundColor: '#fff',
      borderRadius:'32px',
      borderColor:'#546b8a',
      borderWidth: '4px',
      marginTop:'6%',
      marginLeft:'9%',
      marginBottom:'2%',
      borderStyle:"bold",
      fontStyle:"italic",
      width:'80%',
      height:'50%',
     
  
   
  },
    Plus: {
      margin: 5,
      height: 25,
      width: 45,
      marginTop:10,
      marginLeft:35,
      marginRight:30,
      marginBottom:30,
      resizeMode : 'stretch',
    },
    Plus2: {
      margin: 5,
      height: 35,
      width: 45,
      marginTop:10,
      marginLeft:35,
      marginRight:30,
      marginBottom:30,
      resizeMode : 'stretch',
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
      width:width*.065,
      height:width*.05,
      // borderTopLeftRadius: width*.0085,
      // borderTopRightRadius:  width*.0085,
      // borderBottomLeftRadius:  width*.0085,
      // borderBottomRightRadius:  width*.0085,
      resizeMode:'cover'
  },
  adImage2:
  {
      width:width*.80,
      height:width*.4,
      marginLeft:'10%',
   resizeMode:'cover',
      // borderTopLeftRadius: width*.0085,
      // borderTopRightRadius:  width*.0085,
      // borderBottomLeftRadius:  width*.0085,
      // borderBottomRightRadius:  width*.0085
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
    fontSize:10,
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
  iconImage2:
  {
      height:width*.020,
      width:width*.020,
     
  },
  }
)