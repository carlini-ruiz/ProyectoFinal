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
    xhttp.open('GET', 'https://prograinter-proyecto.000webhostapp.com/HDCMostrarCitas.php?nombre='+this.state.props.route.params.name, true);
    xhttp.send();
  }
  render() {        
    const _this = this;
    const getItem = (id, nombre1,telefono1,tipo_equipo1,marca1,modelo1,numserie1,falla1,accesorios1)=>{
      console.log(id);
      _this.props.navigation.navigate("id",{id:id,nombre:nombre1,telefono:telefono1,tipo_equipo:tipo_equipo1,marca:marca1,modelo:modelo1,numserie:numserie1,falla:falla1,accesorios:accesorios1})
    }    
    const renderUser = ({item}) => {
      return (        
        <View style={{margin: 5, borderWidth: 1, padding: 10}}>
          <TouchableOpacity onPress={()=>{ getItem(item.id, item.Nombre,item.Telefono,item.Tipo_Equipo, item.Marca,item.Modelo,item.NumSerie, item.Falla,item.Accesorios)}}>           
          <Text style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>  
                    Cita #{item.id}            </Text>
          <Text style={{color: 'black'}}>Nombre : {item.Nombre}</Text>
          <Text style={{color: 'black'}}>Marca Equipo : {item.Marca}</Text>
          <Text style={{color: 'black'}}>Falla o Servicio requerido : {item.Falla}</Text>       
          {/* <Text style={{color: 'black'}}>Url : {item.Imagen}</Text>  */}         
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View>        
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
        resizeMode: "center",
        },     
      })