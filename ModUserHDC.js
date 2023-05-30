import React, { Component } from 'react';
import { View, Text, TextInput,Image, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        TipoUser:"",
        Username:"",
        Password:"",
        Nombre:"",
        Centro:"",
        dCodigos:"",
        codigobaja:"",
    };
  }

  componentDidMount() {
    
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {        
        var temp = JSON.parse(xhttp.responseText);
        _this.setState({dCodigos:temp});
      }
    };
    xhttp.open('GET', 'https://prograinter-proyecto.000webhostapp.com/HDCTecnicos.php', true);
    xhttp.send();
  }

  render() {
    const Alta = ()=>{
        
      }
    return (
      <View>
        <Image style={styles.imagen1} source={require("./Imagenes/hdc.jpg")}/> 
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold', marginTop:10}}>Escoja el usuario a modificar:</Text>
        <View style={styles.codigoss}>
        <SelectDropdown
            data={this.state.dCodigos}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                this.setState({codigobaja:selectedItem});                
                
                
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        </View>
        <View style={styles.nombre}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Tipo de Usuario:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}} 
        onChangeText={TipoUser => this.setState({TipoUser})}
        />
        </View>

        <View style={styles.telef}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>User Name:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}} 
        onChangeText={Username => this.setState({Username})}
        />
        </View>

        <View style={styles.tequipo}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Password:</Text>
        <TextInput   style={{margin: 10, borderWidth: 2, padding: 10}}       
        onChangeText={Password => this.setState({Password})}
        />
        </View>

        <View style={styles.mark}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Nombre Completo:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}        
        onChangeText={Nombre => this.setState({Nombre})}
        />
        </View>
        <View style={styles.modelo}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Centro:</Text>
        <TextInput style={{margin: 10, borderWidth: 2, padding: 10}}
        onChangeText={Centro => this.setState({Centro})}
        />
        </View>

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
              'Guardado Exitoso','Se modificaron los datos', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
               //_this.props.navigation.navigate("PantallaA",{nombre:this.props.route.params.nombre, codigo:this.props.route.params.codigo});
               
      }else{
          Alert.alert(
              'Fallo en guardar','Intente de nuevo', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
      }
      }
      };
      xhttp.open("GET","https://prograinter-proyecto.000webhostapp.com/HDCModifyUser.php?tipo="+this.state.TipoUser+"&username="+this.state.Username+"&password="+this.state.Password+"&nombre="+this.state.Nombre+"&centro="+this.state.Centro+"&username2="+this.state.codigobaja, true);
     
      xhttp.send();
    }}>
    <Image style={{marginLeft:30,marginTop:80,}}source={require("./Imagenes/GUARDAR.png")}/> 
    </TouchableOpacity>  
    </View>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
    botons:{
        marginLeft: 100,
        marginTop: 400,
        width: 200,
    },
    imagen1:{
      width:"auto",
      height:45,   
      
      },
      codigoss:{
        marginLeft: 98,
        marginTop: 10,
        width: 200,
        borderWidth: 1,
        width: 208
    },

    nombre:{
      marginLeft: 10,
      marginTop: 320,
      width: 200,
      position:"absolute"
  },
  telef:{
      marginLeft: 200,
      marginTop: 320,
      width: 200,
      position:"absolute"
  },
  tequipo:{
      marginLeft: 10,
      marginTop: 420,
      width: 200,
      position:"absolute"
  },
  mark:{
      marginLeft: 200,
      marginTop: 420,
      width: 200,
      position:"absolute"
  },
  modelo:{
      marginLeft: 100,
      marginTop: 520,
      width: 200,
      position:"absolute"
  },
  numse:{
      marginLeft: 220,
      marginTop: 170,
      width: 170,
      position:"absolute"
  },
  falla:{
      marginLeft: 25,
      marginTop: 250,
      width: 170,
      position:"absolute"
  },
  
  acceso:{
      marginLeft: 220,
      marginTop: 232,
      width: 170,
      position:"absolute"
  },
  
  })


