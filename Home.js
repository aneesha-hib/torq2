import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Button} from 'react-native';
import Header from './Header.js'
import Footer from './Footer.js';
import Mainpage from './Main.js';
import Advertisement from './Advertisement.js';
import AdvertisementCarousel from './AdvertisementCarousel';
import FlatGridExample from './FlatGridExample';
import SectionGridExample from './SectionGridExample';
import Screen from './Screen.js';




export default function Home({navigation}) {
  return (
     <ScrollView>

    
    <View style={styles.container} >
         
          
         
     <Header navigation={navigation}/><br></br>
     <Mainpage navigation={navigation}/><br></br> 
     <Advertisement /><br></br>
     <Footer />
     
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    height:'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
 
  },
});


