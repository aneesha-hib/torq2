// import React, { useMemo, useState } from 'react';
// import ReactDOM from 'react-dom';
// import {View} from 'react-native';

// const lookup = {
//   def: [{ id: '0', text: 'Choose your model' }],
//   mazda: [
//     { id: '1', text: '1' },
//     { id: '2', text: '2' },
//     { id: '3', text: '3' },
//     { id: '4', text: '4' },
//     { id: '5', text: '5' },
//   ],
//   bmv: [
//     { id: 'a', text: 'a' },
//     { id: 'b', text: 'b' },
//     { id: 'c', text: 'c' },
//     { id: 'd', text: 'd' },
//     { id: 'e', text: 'e' },
//   ],
// };

// function Example() {
//   const [dataValue, setDataValue] = useState('def');
//   const options = useMemo(() => lookup[dataValue], [dataValue]);

//   const onChange = ({ target: { value } }) => {
//     setDataValue(value);
//   };

//   return (
//     <View>
//       <select onChange={onChange}>
//         <option value='def'>Choose your car</option>
//         <option value='mazda'>Mazda</option>
//         <option value='bmv'>BMV</option>
//       </select>
//       <hr />
      

//       <select disabled={dataValue === 'def'}>
//         {[...lookup.def, ...options].map(({ id, text }) => (
//           <option key={id} value={id}>
//             {text}
//           </option>
//         ))}
//       </select>
//     </View>
//   );
// }

// ReactDOM.render(<Example />, document.getElementById('root'));

// export default Example;


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
        { name: 'Acura', states: [ 'MDX', 'RDX', 'SLX','ZDX'] },
        { name: 'Alfa Romeo', states: [ 'Stelvio'] },
        { name: 'Aston Martin', states: [ 'DBX'] },
        { name: 'Audi', states: [ 'Q2', 'Q3', 'Q3','Q5','Q7','Q8','RSQ8'] },
        { name: 'BAIC', states: [ 'X25', 'X35', 'X55','X65','BJ20','BJ40','M20'] },
        { name: 'Bentley', states:['Bentayga']}
  
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


<View style={{flexDirection:'row'}}>
<View style={{flexDirection:'row',flex:1,borderRadius:'108px',Height:'50%',Width:'50%',marginTop:'10%',borderColor:'#dcdcdc',borderWidth:2,marginRight:'4%'}}>  
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
           backgroundColor: 'transparent',
           marginTop:5}}
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

