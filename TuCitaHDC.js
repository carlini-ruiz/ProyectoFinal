//Importacion de los objetos
import { Text, View, StyleSheet, Image, TextInput, Button, Alert, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Inicio extends Component {    
    constructor (props){
    super(props);
    this.state={
    //aqui se declaran las variables
        Usna:"",
        Pass:"",
        res:"",                       
                }
    }
//declaracion de variables
  render() {
    
    const logout = () =>{this.props.navigation.navigate("MenuUser")}
    //programacion js    
   
    return ( 
        <View>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.jpg")}/>         
        {/* <Text style={{fontSize: 20, textAlign:"center", color: "black", fontWeight: 'bold'}}>
          Bienvenido          
        </Text>
        <Text style={{fontSize: 20, textAlign:"center", color: "black"}}>
        {this.props.route.params.nombre}{'  '}
        </Text> */}
        
        <TouchableOpacity onPress={logout}>
          <Image source={require("./Imagenes/regresar.png")} style={styles.salir}></Image>
         </TouchableOpacity>
        
        {/* <View style={styles.btnr}>
        <Button title='Registrate' onPress={registro}></Button>
        </View> */}
        </View> 

    )
  }
}
const styles = StyleSheet.create({
encabezado:{
fontSize:40,
textAlign:"center",
color: "orange",
},

container:{
flex:1,
width: '100%',
height:'100%',
},

imagen1:{
width:"auto",
height:45,   
resizeMode: "center",
},
salir:{ 
    position:"absolute",
    marginTop: 530,
    },


imagen2:{
width:150,
height:200,
marginLeft:140,
marginTop: 20,

},

inputs:{
width:250,
marginLeft:70,
borderWidth:1,
marginTop: 100,
fontSize: 30
},

input:{
  width:250,
  marginLeft:70,
  borderWidth:1,
  marginTop: 10,
  fontSize: 30
  },

btn:{
marginTop:30,
color:"red",
width:100,
height:80,
marginLeft:150,
},

btnr:{
  marginTop:10,
  width:100,
  height:80,
  marginLeft:150,
  },
})