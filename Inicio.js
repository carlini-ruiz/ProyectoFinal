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
    const registro = () =>{this.props.navigation.navigate("RegistroHDC"); }
    //programacion js  
    return ( 
        <View>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.png")}/> 
        <Text style={{fontSize: 20, color: 'purple' , fontWeight: 'bold', textAlign: "center", marginTop:30}}>BIENVENIDO</Text>
        <Text style={{fontSize: 20, color: 'purple' , fontWeight: 'bold', textAlign: "center", marginTop:30}}>REPAIR YOUR PC</Text>
        <TextInput style={styles.inputs}
        placeholder="Usuario"
        onChangeText={Usna => this.setState({Usna})}/>
        
        <TextInput style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={Pass => this.setState({Pass})}/>      
        

        <View >
    <TouchableOpacity style={{width:10}} onPress={()=>{
      const _this = this;
      //programacion siguiente ventana       
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {        
        if (this.readyState == 4 && this.status == 200) {            
             console.log(xhttp.responseText);
             let cadena = xhttp.responseText;
             const datos = cadena.split(",");
            /*
            //CLASE 12 SEP 2022
            let cadena = xhttp.responseText;
            const datos = cadena.split(",");
            console.log(datos[2]); //nombre
            if(xhttp.responseText == '0')
            {
              //error
            }else{
              _this.props.navigation.navigate("Pantallab",{nombre:datos[2], 
                codigo:datos[1]});
            }
            */
             /*tarea 5 sep 2022*/
            const usuario = xhttp.responseText.split(',');
            if(usuario[0] == 'Admin')
            {
             _this.props.navigation.navigate("MenuAdmin");              
            } 
            if(usuario[0] == 'User')
            {
             _this.props.navigation.navigate("MenuUser",{nombre:datos[2]});              
            }
             if(usuario[0] == '0')
             {              
              Alert.alert(
                'Usuario Incorrecto','Usuario o Contraseña ingresados incorrectamente', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]); 
             }
            }          
      };
      xhttp.open("GET", "https://prograinter-proyecto.000webhostapp.com/HDCLogin.php?username="+this.state.Usna+"&password="+this.state.Pass, true);
      console.log("https://prograinter-proyecto.000webhostapp.com/HDCLogin.php?username="+this.state.Usna+"&password="+this.state.Pass);
      
      xhttp.send();
    }}>
    <Image style={{marginLeft:120, marginTop:60}}source={require("./Imagenes/ENTRAR.png")}/> 
    </TouchableOpacity>  
    </View>    

        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: "center", marginTop:150}}>No tienes cuenta?
        <TouchableOpacity onPress={registro}>
        <Text style={{ color: '#2E64FE', fontWeight: '1000', flex: 0.9,fontSize: 15 }}>   Registrate</Text>
        </TouchableOpacity>
        </Text>
        
        
        {/* <View style={styles.btnr}>
        <Button title='Registrate' onPress={registro}></Button>
        </View> */}
        <Image style={{marginLeft:0, marginTop:6}}source={require("./Imagenes/hdc.jpg")}/>
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
height:105,   
resizeMode: "center",
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
marginTop: 120,
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