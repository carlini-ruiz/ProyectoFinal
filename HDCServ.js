import React, { Component } from 'react';
import { View, Text, Alert, FlatList, Touchable, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      urlf:[],
      users: [],
    };
  }
  componentDidMount() {
    
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //_this.setState({users: xhttp.responseText});
        var myArr = JSON.parse(this.responseText);
        _this.setState({users: myArr});
      }
    };
    xhttp.open('GET', 'https://prograinter-proyecto.000webhostapp.com/HDCMostrarServicios.php', true);
    xhttp.send();
  }
  render() {        
    const _this = this;
    const getItem = (codigo1,servicio1,info1,imagen1,activo1)=>{
      console.log(codigo1);
      console.log(imagen1)
      _this.props.navigation.navigate("ServiciosView",{codigo:codigo1,servicio:servicio1, info:info1,imagen:imagen1, activo:activo1})
    }    
    const renderUser = ({item}) => {
      return (        
        <View style={{margin: 8, borderWidth: 2, padding: .5, borderRadius:200, backgroundColor:"#c0a1ef", borderColor:"#750587"}}>
          <TouchableOpacity onPress={()=>{ getItem(item.Codigo, item.Servicio,item.Info,item.Imagen,item.Activo)}}>           
          {/* <Text style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>  
                    Cita #{item.Codigo}            </Text> */}
          <Text style={{color: '#ffffff', fontSize: 35, textAlign:"center", fontWeight: 'bold'}}>{item.Servicio}</Text>
          {/* <Text style={{color: 'black'}}>Marca Equipo : {item.Info}</Text>
          <Text style={{color: 'black'}}>Falla o Servicio requerido : {item.Activo}</Text>  */}      
          {/* <Text style={{color: 'black'}}>Url : {item.Imagen}</Text>  */}         
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.jpg")}/>
        {/* <Text style={{color: "black", fontSize: 18, textAlign:"center"}}>
          Bienvenido: {this.props.route.params.nombre}
        </Text>   */}              
        <FlatList
          data={this.state.users}
          renderItem={renderUser}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

//foto random dentro del touchabkle
/* let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {            
             console.log(xhttp.responseText);   
             var myArrr = JSON.parse(this.responseText);
             _this.props.navigation.navigate("Pantallac",{id:item.id,nombre:item.Nombre, codigo:item.Codigo, foto:myArrr.url})        
            }          
      };
      xhttp.open("GET", "https://100k-faces.glitch.me/random-image-url", true);
      xhttp.send(); } */

      const styles = StyleSheet.create({        
      imagen1:{
        /* position:"absolute", */
        width:"auto",
        height:45,   
       
        },     
      })