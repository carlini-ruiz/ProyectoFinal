import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native'

export default class PantallaA extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View /* style={styles.fondo} */>
        <Text style={{fontSize: 20, textAlign:"center", color: "black", fontWeight: 'bold'}}>
          Bienvenido          
        </Text>
        <Text style={{fontSize: 20, textAlign:"center", color: "black"}}>
        {this.props.route.params.nombre}{'  '} </Text>
        <Text style={{fontSize: 20, textAlign:"center", color: "black"}}>
        {this.props.route.params.nombre}{'  '}
          {this.props.route.params.codigo} 
        </Text>        
        <View style={styles.botons}>
        <Button title='Alta' onPress={()=>{this.props.navigation.navigate("Altas")}}></Button>
        </View>
        <View style={styles.botonr}>
        <Button title='Baja' onPress={()=>{this.props.navigation.navigate("Bajas")}}></Button>
        </View>
        <View style={styles.botonm}>
        <Button title='Cambio' ></Button>   
        </View>
        <View style={styles.botond}>
        <Button title='Lista' onPress={()=>{this.props.navigation.navigate("Pantallab",{nombre:this.props.route.params.nombre})}}></Button> 
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fondo:{
    backgroundColor: "#F6E5D5"
  },
  botons:{
      marginLeft: 15,
      marginTop: 20,
      width: 90,
      backgroundColor: "#F6E5D5",
  },
  botonr:{
      position:"absolute",
      marginLeft: 115,
      marginTop: 143,
      width: 90,
      backgroundColor: "#F6E5D5",
  },
  botonm:{
      position:"absolute",
      marginLeft: 215,
      marginTop: 143,
      width: 90,
      backgroundColor: "#F6E5D5",
  },
  botond:{
      position:"absolute",
      marginLeft: 315,
      marginTop: 143,
      width: 90,
      backgroundColor: "#F6E5D5",
  },

})