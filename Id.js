import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View /* style={{backgroundColor: "#F6E5D5"}} */>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.jpg")}/> 
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Cita #{this.props.route.params.id}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Nombre: {this.props.route.params.nombre}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Telefono: {this.props.route.params.telefono}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Tipo de Equipo: {this.props.route.params.tipo_equipo}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Marca: {this.props.route.params.marca}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Modelo: {this.props.route.params.modelo}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Numero de serie: {this.props.route.params.numserie}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Falla o Servicio Requerido: {this.props.route.params.falla}  
        </Text>
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Accesorios: {this.props.route.params.accesorios}  
        </Text>        
        <Text style={{fontSize: 18, textAlign: "center", color: "black"}}>
         Dia Agendado: {this.props.route.params.dia_cita}  
        </Text> 
        <View style={styles.botons}>
        <Button title='Regresar' onPress={()=>{this.props.navigation.navigate("Pantallab",{nombre:this.props.route.params.nombre})}} />
        </View>
        
      </View>
    );    
  }
}

const styles = StyleSheet.create({
  imagen1:{
    width:"auto",
    height:45,   
    resizeMode: "center",
    },

    botons:{
      marginLeft: 100,
      marginTop: 250,
      width: 200,
  },
})