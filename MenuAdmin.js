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
    const gotoTEC = () =>{this.props.navigation.navigate("TecnicosHDC")}
    const gotoCIT = () =>{this.props.navigation.navigate("Pantallab")}
    const logout = () =>{this.props.navigation.navigate("Inicio")}
    return (
        <View /* style={styles.fondo} */>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.jpg")}/> 
        {/* <Text style={{fontSize: 20, textAlign:"center", color: "black", fontWeight: 'bold'}}>
          Bienvenido          
        </Text> */}
        {/* <Text style={{fontSize: 20, textAlign:"center", color: "black", marginBottom: 30}}>
        {this.props.route.params.nombre}{'  '} </Text> */}
         
        <TouchableOpacity onPress={gotoSERV}>
          <Image source={require("./Imagenes/SERVICIOSGRANDE.png")} style={styles.quie}></Image>
         </TouchableOpacity>

         <TouchableOpacity onPress={gotoTEC}>
          <Image source={require("./Imagenes/USUARIOS.png")} style={styles.ubi2}></Image>
         </TouchableOpacity>        

         <TouchableOpacity onPress={gotoCIT}>
          <Image source={require("./Imagenes/AGENDADASGRANDE.png")} style={styles.faq}></Image>
         </TouchableOpacity>                  

         <TouchableOpacity onPress={logout}>
          <Image source={require("./Imagenes/salir.png")} style={styles.salir}></Image>
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
    marginLeft:80,    
    marginTop:320,
    position:"absolute",
    },
  ubi:{ 
    marginLeft:230,
    marginTop:20,
    position:"absolute",
    }, 
    ubi2:{ 
      marginLeft:80,
      marginTop:70,
      position:"absolute",
      },
    faq:{ 
      marginLeft:80,
      marginTop: 195,
      position:"absolute",
      },   
     
        serv:{ 
          marginLeft:230,
          position:"absolute",
          marginTop: 190,
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
                marginTop: 530,
                },

})