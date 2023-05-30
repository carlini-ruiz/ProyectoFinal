import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

export default class PantallaA extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {    
    const gotomap = () =>{this.props.navigation.navigate("MapaHDC")}
    const gotowho = () =>{this.props.navigation.navigate("HDCWho")}
    const gotofaq = () =>{this.props.navigation.navigate("HDCFAQ")}
    const gotoserv = () =>{this.props.navigation.navigate("HDCServ")}   
    const gototuci = () =>{this.props.navigation.navigate("TuCitaHDC")}    
    const gotoCIT = () =>{this.props.navigation.navigate("CitasHDC")}
    const logout = () =>{this.props.navigation.navigate("Inicio")}
    return (
        <View /* style={styles.fondo} */>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.jpg")}/> 
        <Text style={{fontSize: 20, textAlign:"center", color: "black", fontWeight: 'bold'}}>
          Bienvenido          
        </Text>
        <Text style={{fontSize: 20, textAlign:"center", color: "black"}}>
        {this.props.route.params.nombre}</Text>
         
        <TouchableOpacity onPress={gotowho}>
          <Image source={require("./Imagenes/QUIENES.png")} style={styles.quie}></Image>
         </TouchableOpacity>

        <TouchableOpacity onPress={gotomap}>
          <Image source={require("./Imagenes/UBICACION2.png")} style={styles.ubi}></Image>
         </TouchableOpacity>

         <TouchableOpacity onPress={gotoserv}>
          <Image source={require("./Imagenes/SERVICIOS.png")} style={styles.serv}></Image>
         </TouchableOpacity>         

         <TouchableOpacity onPress={gotofaq}>
          <Image source={require("./Imagenes/FAQ.png")} style={styles.faq}></Image>
         </TouchableOpacity>

         <TouchableOpacity onPress={gotoCIT}>
          <Image source={require("./Imagenes/HACERCITA.png")} style={styles.CITA1}></Image>
         </TouchableOpacity>

        

         <TouchableOpacity onPress={logout}>
          <Image source={require("./Imagenes/salir.png")} style={styles.salir}></Image>
         </TouchableOpacity>
         {/* <Image style={styles.imagen2} source={require("./Imagenes/hdc.jpg")}/> */} 

        {/* <View style={styles.botons}>
        <Button title='Quienes somos' onPress={()=>{this.props.navigation.navigate("Servicios")}}></Button>
        </View>
        <View style={styles.botonr}>
        <Button title='Donde nos ubicamos' onPress={()=>{this.props.navigation.navigate("MapaHDC")}}></Button>
        </View>
        <View style={styles.botond}>
        <Button title='Servicios' onPress={()=>{this.props.navigation.navigate("Pantallab",)}}></Button> 
        </View>       
        <View style={styles.botonss}>
        <Button title='Haz tu cita' onPress={()=>{this.props.navigation.navigate("Pantallab",)}}></Button> 
        </View>
        <View style={styles.botonssm}>
        <Button title='Modifica tu cita' onPress={()=>{this.props.navigation.navigate("Pantallab",)}}></Button> 
        </View> */}
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
      
      width: 100,
      backgroundColor: "#F6E5D5",
  },
  botonr:{
      position:"absolute",
      marginLeft: 210,
      marginTop: 143,
      width: 100,
      backgroundColor: "#F6E5D5",
  },
  botonm:{
      position:"absolute",
      marginLeft: 310,
      marginTop: 143,
      width: 100,
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
    marginLeft: 210,
    marginTop:200,
    width: 100,
    backgroundColor: "#F6E5D5",
},
botonssm:{
  position:"absolute",
  marginLeft: 150,
  marginTop:270,
  width: 100,
  backgroundColor: "#F6E5D5",
},

imagen1:{
  width:"auto",
  height:45,   
  
  },
  imagen2:{
    marginTop:700,
    width:410,
    height:200,   
    position:"absolute"
    },
  quie:{ 
    marginLeft:70,
    marginTop:40,
    position:"absolute",
    },
  ubi:{ 
    marginLeft:230,
    marginTop:40,
    position:"absolute",
    }, 
    faq:{ 
      marginLeft:70,
      marginTop: 180,
      position:"absolute",
      },   
     
        serv:{ 
          marginLeft:230,
          position:"absolute",
          marginTop: 180,
          },
          CITA1:{ 
            marginLeft:70,
            marginTop: 320,
            position:"absolute",
            },
            CITA2:{ 
              marginLeft:230,
              position:"absolute",
              marginTop: 320,
              },
              salir:{ 
                position:"absolute",
                marginTop: 530,
                },

  

})