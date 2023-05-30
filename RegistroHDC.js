import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, Alert, StyleSheet } from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Username:"",
        Username2:"",
        Password:"",
        Nombre:"",
        Centro:"",
    };
  }

  render() {
    const Alta = ()=>{
        const _this = this;
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          if(xhttp.responseText === "1"){
              console.log("Exito");
              Alert.alert(
                  'Guardado Exitoso','Ya puedes Ingresar', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
                   //_this.props.navigation.navigate("PantallaA",{nombre:this.props.route.params.nombre, codigo:this.props.route.params.codigo});
                   _this.props.navigation.navigate("Inicio");
          }else{
              Alert.alert(
                  'Fallo en guardar','Intente de nuevo', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
          }
          }
          };
          xhttp.open("GET","https://prograinter-proyecto.000webhostapp.com/HDCRegistro.php?username="+this.state.Username+"&username2="+this.state.Username+"&password="+this.state.Password+"&nombre="+this.state.Nombre+"&centro="+this.state.Centro, true);
                       
          xhttp.send();
      }
    return (
      <View>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>User Name:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}} 
        onChangeText={Username => this.setState({Username})}
        
        />
        
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Password:</Text>
        <TextInput   style={{margin: 10, borderWidth: 2, padding: 10}}       
        onChangeText={Password => this.setState({Password})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Nombre Completo:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}        
        onChangeText={Nombre => this.setState({Nombre})}
        />
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Domicilio:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}
        onChangeText={Centro => this.setState({Centro})}
        />
        <View style={styles.botons}>
        <Button title='Guardar' onPress={Alta}/>
        <Image style={{marginLeft:10, marginTop:1}}source={require("./Imagenes/registro.png")}/> 
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


