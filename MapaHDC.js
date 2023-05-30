import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 20.658215442403428;
const LONGITUDE =  -103.32698454561296;
const LATITUDE_DELTA = 0.0099;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapaHDC extends Component {
  constructor(props) {
    super(props);
    this.state = {
        region:{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        markers: [{
            title: 'Hospital de Computadoras',
            coordinates:{
                latitude : 20.658215442403428,
                longitude :  -103.32698454561296
            },
        },
        {
            title: 'C. Corregidora 2, Unidad Modelo, 44430 Guadalajara, Jal.',
            coordinates:{
                latitude : 20.658215442403428,
                longitude :  -103.32698454561296
            },
        }],
    };
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <MapView
        provider={this.props.provider}
        style={styles.map}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={false}
        rotateEnabled={false}
        initialRegion={this.state.region}
        showUserLocation={true}
        followsUserLocation={true}
        >
            {this.state.markers.map(marker=>(
                <Marker
                coordinate={marker.coordinates}
                title={marker.title}
                />
            ))}
        </MapView>
        
      </View>
    );
  }
}
MapaHDC.propTypes={
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    scrollview:{
        alignItems: 'center',
        paddingVertical: 40,
    },
    map:{
        height: '100%',
        width: '100%',
    },
});
