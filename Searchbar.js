import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet, Dimensions} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

  render() {
    const { searchQuery } = this.state;
    return (
      <Searchbar style={styles.content}
        placeholder="Search Here ..."         
        inputContainerStyle={{backgroundColor:'#fff',borderWidth:1,borderRadius:5,borderColor:'#eeeeee'}}
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />
    );
  }
}
export const {width,height}=Dimensions.get('window');
const styles=StyleSheet.create({
  content:
  {
    flex:3,
    height:width*.025,
    width:width*.9,
    resizeMode:'center',
    marginLeft:widthPercentageToDP('1%'),
    backgroundColor:'#eeeeee',
    borderColor:'#eeeeee',
    fontSize:heightPercentageToDP('1%'),
    borderTopLeftRadius: 115,
    borderTopRightRadius: 115,
    borderBottomColor:'transparent',
    borderTopColor:'transparent',
    borderBottomLeftRadius: 125,
    borderBottomRightRadius: 125,
    underlineColorAndroid:'transparent', 
  }
})