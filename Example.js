
import React, { Component } from 'react';
import { Button, View, Text,Image, StyleSheet ,ScrollView} from 'react-native';
import ReactDOM from 'react-dom';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';


const styles=StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 35,

  },
  scrollContentContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
 
});


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries : [],
      states : [],
      cities : [],
      selectedCountry : '--Choose Make--',
      selectedState : '--Choose Model--'
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      countries : [
        { name: 'Abarth', states: [ '124', '595', '695'] },
        { name: 'Acura', states: [ 'ILX', 'TLX', 'RLX','NSX','CL','EL','RL','TL','RSX','TSX','Integra','Legend','Vigor'] },
        { name: 'Alfa Romeo', states: [ 'Giulia', 'Giulietta', 'Brera','Milto','Milano','Spider','GT','GTV','GTV6','4C','147','156','159','164','166','2000'] },
        { name: 'Aston Martin', states: [ 'DB7', 'DB9', 'DB11','DBS','Cygnet','One 77','Rapide','Valkyire','Volante','Vantage','Vanquish','Virage','Zagato'] },
        { name: 'Audi', states: [ '80', '90', '100','200','A1','A3','A4','A5','A6','A7','A8','S','RS','R8','TT','Cabriolet','Quattro'] },
        {name: 'BAIC',states:['D20','D50','EC3','EU5']},
  
      ]
    });
  }
  
  changeCountry(event) {
    this.setState({selectedCountry: event.target.value});
    this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
  }
 
  changeState(event) {
    this.setState({selectedState: event.target.value});
    // const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
    // this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
  }
  
  render() {

    const placeholder = {
      label: 'choose here',
      value: null,
      color: '#9EA0A4',
    };
    return (

<View style={{Height:'50%',Width:'55%'}}>



<View style={{flexDirection:'row',flex:1,borderRadius:'108px',Height:'50%',Width:'100%',marginTop:'3%',borderColor:'#dcdcdc',borderWidth:2}}>    
      <Image source={require('./assets/exclamation.png')} style={{
  padding: 10,
  margin: 5,
  height: 15,
  width: 15,
  marginTop:19,
  marginLeft:30,
  resizeMode : 'stretch',
  alignItems: 'center'
}} />
      <Text style={{marginTop:20,fontFamily:'arial' ,fontSize:16 , color:'#546b8a'}}>  Make  :          </Text>     
      <View style={ {

margin: 15,
marginTop:.001,
height: 40,
borderColor: '#fff',
borderWidth: 2,
marginLeft:20,
width:355,
backgroundColor:'#fff',
paddingLeft:2,
paddingRight:2,
paddingTop:1,
paddingBottom:1,
borderRadius:18,
}}>     
     
     {/* <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}> */}
          <View paddingVertical={5} />
          <select 
          placeholder="Country" 
          value={this.state.selectedCountry} 
          onChange={this.changeCountry}
           style={{borderColor:'#fff',fontFamily:'arial',
           fontSize:15,
           marginTop:10}}
          >
             <option>--Choose Make--</option>
             {this.state.countries.map((e, key) => {
               return <option key={key}>{e.name}</option>;
             })}
           </select>

         
       
         {/* </ScrollView> */}
        </View>
          
           </View>


           <View style={{flexDirection:'row',flex:1,borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'10%',borderColor:'#dcdcdc',borderWidth:2}}>    
           <Image source={require('./assets/exclamation.png')} style={{
   padding: 10,
   margin: 5,
   height: 15,
   width: 15,
   marginTop:19,
   marginLeft:30,
   resizeMode : 'stretch',
   alignItems: 'center'
}} />
           <Text style={{marginTop:20,color:'#546b8a'}}>  Model:         </Text> 
             <View style={{

margin: 15,
marginTop:.001,
height: 40,
borderColor: '#fff',
borderWidth: 2,
marginLeft:20,
width:355,
backgroundColor:'#fff',
paddingLeft:2,
paddingRight:2,
paddingTop:1,
paddingBottom:1,
borderRadius:18,
}}>   
             

      
            
      

       <View paddingVertical={5} />
       <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}  style={{borderColor:'#fff',fontFamily:'arial',
                fontSize:15,
                marginTop:10}}>
         <option>--Choose Model--</option>
         {this.state.states.map((e, key) => {
           return <option key={key}>{e}</option>;
         })}
       </select>
      
      
    
     </View>
        </View>
        </View>
      // <div id="container">
      //   <h2>Cascading or Dependent Dropdown using React</h2>
  
      //   <div>
      //     <label>Country</label>
      //     <select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
      //       <option>--Choose Country--</option>
      //       {this.state.countries.map((e, key) => {
      //         return <option key={key}>{e.name}</option>;
      //       })}
      //     </select>
      //   </div>

      //   <div>
      //     <label>State</label>
      //     <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
      //       <option>--Choose State--</option>
      //       {this.state.states.map((e, key) => {
      //         return <option key={key}>{e.name}</option>;
      //       })}
      //     </select>
      //   </div>
        
      //   <div>
      //     <label>City</label>
      //     <select placeholder="City">
      //       <option>--Choose City--</option>
      //       {this.state.cities.map((e, key) => {
      //         return <option key={key}>{e}</option>;
      //       })}
      //     </select>
      //   </div>
      // </div>
    
    )
  }
}
ReactDOM.render(<Example />, document.getElementById('root'));
export default Example

