import React from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'Advertisement',
  },
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
    cornerLabelColor: '#0080ff',
    cornerLabelText: 'Advertisement',
  },
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Advertisement%',
  },
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Advertisement',
  },
];

const Screen = () => {
  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.cardContainer}
    >
      <View
        style={styles.cardWrapper}
      >
        {/* <Image
          style={styles.card}
          source={{ uri: data.coverImageUri }}
        /> */}
        <View
          style={styles.container1}
        >
          <Text style={styles.textAdvertisement}>
            { data.cornerLabelText }
          </Text>
        </View>
       </View>
     </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width:width*.5,
  },
  cardWrapper: {
    borderRadius: 8,
    // overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  container1: {
    height:width*.08,
    width:width*.30,
    backgroundColor: '#a1a9bc',
    justifyContent: 'center',
    alignItems:'center',
    borderTopLeftRadius: width*.008,
    borderTopRightRadius: width*.008,
    borderBottomLeftRadius:  width*.008,
    borderBottomRightRadius:  width*.008
  },
  textAdvertisement:
{
  color:'#354e76',
  fontSize:width*.01
},
});

export default Screen;