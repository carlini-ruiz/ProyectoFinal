import React, { Component } from 'react';
import { View, Text, Alert, FlatList, Touchable, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';

export default class Pantallac extends Component {
  constructor(props) {
    super(props);
    this.state = {
        foto:"https://cdn-icons-png.flaticon.com/512/219/219983.png",
    };
  }
  componentDidMount(){
    console.log(this.props.route.params.foto)
    this.setState({foto:this.props.route.params.foto})
  }
  render() {
    
    return (
        <View>
        <Text style={{fontSize: 20}}>
          Miembro: {this.props.route.params.id}
        </Text>
        <Text style={{fontSize: 20}}>
          Nombre: {this.props.route.params.nombre}
        </Text>
        <Text style={{fontSize: 20}}>
          Codigo: {' '}{this.props.route.params.codigo}
        </Text>
        <Image style={styles.imagen1} source={{uri: this.state.foto}}/>
        
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
    imagen1:{
    width:200,
    height:200,   
    marginLeft:110,
    marginTop: 10,
    resizeMode: "center",
    },
})
