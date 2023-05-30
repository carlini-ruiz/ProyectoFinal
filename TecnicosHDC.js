import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

export default class PantallaA extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const gotoSERV = () =>{this.props.navigation.navigate("Servicios")}
    const gotoTEC = () =>{this.props.navigation.navigate("RegistroHDCA")}
    const gotoELIM = () =>{this.props.navigation.navigate("ElimUser")}
    const gotomod = () =>{this.props.navigation.navigate("ModUserHDC")}
    const logout = () =>{this.props.navigation.navigate("MenuAdmin")}
    return (
        <View /* style={styles.fondo} */>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.jpg")}/> 
        <Text style={{fontSize: 20, textAlign:"center", color: "black", fontWeight: 'bold'}}>
          Bienvenido          
        </Text>{/* 
        <Text style={{fontSize: 20, textAlign:"center", color: "black", marginBottom: 30}}>
        {this.props.route.params.nombre}{'  '} </Text> */}
         
         <TouchableOpacity onPress={gotoTEC}>
          <Image source={require("./Imagenes/AGREGART.png")} style={styles.ubi}></Image>
         </TouchableOpacity>

         <TouchableOpacity onPress={gotoELIM}>
          <Image source={require("./Imagenes/ELIMUSER.png")} style={styles.serv}></Image>
         </TouchableOpacity>    

         <TouchableOpacity onPress={gotomod}>
          <Image source={require("./Imagenes/MODUSER.png")} style={styles.ubi2}></Image>
         </TouchableOpacity>     

         <TouchableOpacity onPress={logout}>
          <Image source={require("./Imagenes/regresar.png")} style={styles.salir}></Image>
         </TouchableOpacity>  

         
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fondo:{
    backgroundColor: "#F6E5D5"
  },
  botons:{
      marginLeft: 100,
      marginTop: 90,
      width: 100,
      backgroundColor: "#F6E5D5",
  },
  botonr:{
      position:"absolute",
      marginLeft: 215,
      marginTop: 143,
      width: 100,
      backgroundColor: "#F6E5D5",
  },
  botonm:{
      position:"absolute",
      marginLeft: 100,
      marginTop: 143,
      width: 90,
      backgroundColor: "#F6E5D5",
  },
  botond:{
      position:"absolute",
      marginLeft: 100,
      marginTop: 200,
      width: 100,
      backgroundColor: "#F6E5D5",
  },
  botonss:{
    position:"absolute",
    marginLeft: 215,
    marginTop:200,
    width: 100,
    backgroundColor: "#F6E5D5",
},
imagen1:{
  width:"auto",
  height:45,   
  
  },
  quie:{ 
    marginLeft:70,
    position:"absolute",
    },
  ubi:{ 
    marginLeft:70,
    marginTop:50,
    position:"absolute",
    }, 
    ubi2:{ 
      marginLeft:150,
      marginTop:180,
      position:"absolute",
      },
    faq:{ 
      marginLeft:70,
      marginTop: 140,
      position:"absolute",
      },   
     
        serv:{ 
          marginLeft:230,
          marginTop:50,
          position:"absolute",
          },
          CITA1:{ 
            marginLeft:70,
            marginTop: 280,
            position:"absolute",
            },
            CITA2:{ 
              marginLeft:230,
              position:"absolute",
              marginTop: 280,
              },
              salir:{ 
                position:"absolute",
                marginTop: 512,
                },

})