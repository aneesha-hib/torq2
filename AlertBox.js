import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class App extends Component{

  onButtonClickHandler = () => {
    // window.alert('Sucessfully Registered')
    this.props.navigation.navigate('PostAddDetails');
  };

  render(){ 
    return(<div className="App">
      <button onClick={this.onButtonClickHandler} style={{backgroundColor:'#8d1b3c',color:'#fff'}}>Save
  </button>
    </div>);

  }
}
export default App;



