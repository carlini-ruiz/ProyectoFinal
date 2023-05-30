import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Codigo:"",
        Servicio:"",
        Info:"",
        Activo:"",
    };
  }

  render() {    
    return (
      <View>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Codigo del Servicio:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}} 
        onChangeText={Codigo => this.setState({Codigo})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Servicio:</Text>
        <TextInput   style={{margin: 10, borderWidth: 2, padding: 10}}       
        onChangeText={Servicio => this.setState({Servicio})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Info sobre el servicio:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}        
        onChangeText={Info => this.setState({Info})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Esta Activo?</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}
        onChangeText={Activo => this.setState({Activo})}
        />

        <View style={styles.botons}>
            <TouchableOpacity onPress={()=>{
              const _this = this;
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              if(xhttp.responseText === "1"){
                  console.log("Exito");
                  Alert.alert(
                      'Guardado Exitoso','Servicio Guardado', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]); 
              }else{
                  Alert.alert(
                      'Fallo en guardar','Intente de nuevo', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
              }
              }
              };
              xhttp.open("GET","https://prograinter-proyecto.000webhostapp.com/HDCServicios.php?codigo="+this.state.Codigo+"&servicio="+this.state.Servicio+"&info="+this.state.Info+"&activo="+this.state.Activo, true);
             
              xhttp.send();
            }}>
            <Image style={{marginLeft:30}}source={require("./Imagenes/GUARDAR.png")}/> 
            </TouchableOpacity>  
            </View> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
    botons:{
        marginLeft: 100,
        marginTop: 20,
        width: 200,
    },
  
  })
