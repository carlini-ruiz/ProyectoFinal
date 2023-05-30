import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default class Altas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Nombre:"",
        Telefono:"",
        Tipo_Equipo:"",
        Marca:"",
        Modelo:"",
        NumSerie:"",
        Falla:"",
        Accesorios:"",
        Dia_Cita:"",
        dCodigos:"",
        codigobaja:"",
        nombre5:"",
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
    xhttp.open('GET', 'https://prograinter-proyecto.000webhostapp.com/HDCFechas.php', true);
    xhttp.send();
  }
  
  render() {    
    return (
      <View>

        <View style={styles.nombre}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Nombre</Text>
        <TextInput style={{margin: 2, borderWidth: 1, padding: 2}} 
        onChangeText={Nombre => this.setState({Nombre})}
        />
        </View>

        <View style={styles.telef}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Telefono:</Text>
        <TextInput   style={{margin: 2, borderWidth: 1, padding: 2}}      
        onChangeText={Telefono => this.setState({Telefono})}
        /> 
        </View>

        <View style={styles.tequipo}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Tipo de Equipo (Laptop/PC)</Text>        
        <TextInput style={{margin: 2, borderWidth: 1, padding: 2}}        
        onChangeText={Tipo_Equipo => this.setState({Tipo_Equipo})}
        />
        </View>


        <View style={styles.mark}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Marca:</Text>
        <TextInput style={{margin: 2, borderWidth: 1, padding: 2}}
        onChangeText={Marca => this.setState({Marca})}
        />
        </View>

        <View style={styles.modelo}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Modelo</Text>
        <TextInput style={{margin: 2, borderWidth: 1, padding: 2}}
        onChangeText={Modelo => this.setState({Modelo})}/>
        </View>

        <View style={styles.numse}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Numero de serie:</Text>
        <TextInput style={{margin: 2, borderWidth: 1, padding: 2}}
        onChangeText={NumSerie => this.setState({NumSerie})}
        />
        </View>

        <View style={styles.falla}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Falla:</Text>
        <TextInput style={{margin: 2, borderWidth: 1, padding: 2}}
        onChangeText={Falla => this.setState({Falla})}
        />
        </View>

        <View style={styles.acceso}>
        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold'}}>Accesorios (cargador/funda):</Text>
        <TextInput style={{margin: 2, borderWidth: 1, padding: 2}}
        onChangeText={Accesorios => this.setState({Accesorios})}
        />
        </View>

        <Text style={{textAlign:"center",fontSize: 16, color: "black", fontWeight: 'bold', marginTop:335}}>Que dia quieres tu cita:</Text>
        <View style={styles.codigoss}>
        <SelectDropdown
            data={this.state.dCodigos}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                this.setState({Dia_Cita:selectedItem}); //tarea
                
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
        <View style={styles.botons}>
        <Button title='Guardar' onPress={()=>{
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            if(xhttp.responseText === "1"){
                console.log("Exito");
                console.log(Nombre);
                Alert.alert(
                    'Guardado Exitoso','Tu cita se a registrado', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
                    _this.props.navigation.navigate("TuCitaHDC",{});
            }else{
                Alert.alert(
                    'Fallo en guardar','Intente de nuevo', [{text: 'OK', onPress: () => console.log('ok'), style: 'cancel', }]);
            }
            }
            };
            xhttp.open("GET","https://prograinter-proyecto.000webhostapp.com/calisregistro.php?nombre="+this.state.Nombre+"&telefono="+this.state.Telefono+"&tipo_equipo="+this.state.Tipo_Equipo+"&marca="+this.state.Marca+"&modelo="+this.state.Modelo+"&numserie="+this.state.NumSerie+"&falla="+this.state.Falla+"&accesorios="+this.state.Accesorios+"&dia_cita="+this.state.Dia_Cita,true);
                            //"https://prograinter-proyecto.000webhostapp.com/HDCRegistroCitas.php?nombre="+this.state.Nombre+"&telefono="+this.state.Telefono+"&tipo_equipo="+this.state.Tipo_Equipo+"&marca="+this.state.Marca+"&modelo="+this.state,Modelo+"&numserie="+this.state.NumSerie+"&falla="+this.state.Falla+"&accesorios="+this.state.Accesorios+"&dia_cita="+this.state.Dia_Cita
            xhttp.send();            
        }}/>
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
    nombre:{
        marginLeft: 25,
        marginTop: 20,
        width: 170,
        position:"absolute"
    },
    telef:{
        marginLeft: 220,
        marginTop: 20,
        width: 170,
        position:"absolute"
    },
    tequipo:{
        marginLeft: 25,
        marginTop: 80,
        width: 170,
        position:"absolute"
    },
    mark:{
        marginLeft: 220,
        marginTop: 98,
        width: 170,
        position:"absolute"
    },
    modelo:{
        marginLeft: 25,
        marginTop: 170,
        width: 170,
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
    codigoss:{
        marginLeft: 98,
        marginTop: 20,
        borderWidth: 1,
        width: 208,
    },
  
  })


