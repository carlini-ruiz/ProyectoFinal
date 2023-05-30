import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import INICIO from "./Inicio";
import PANTALLAB from "./Pantallab"
import PANTALLAA from "./PantallaA"
import ALTAS from "./Altas"
import ID from "./Id"
import BAJAS from "./Bajas"
import MENUUSER from './MenuUser';
import MENUADMIN from './MenuAdmin';
import REGISTROHDC from './RegistroHDC';
import REGISTROHDCA from './RegistroHDCA';
import SERVICIOS from './Servicios';
import MAPAHDC from './MapaHDC';
import PANTALLAC from "./Pantallac";
import CITASHDC from './CitasHDC';
import MOSTRARCITA from './MostrarCita';
import TECNICOSHDC from './TecnicosHDC';
import MODUSERHDC from './ModUserHDC';
import ELIMUSER from './ElimUser';
import HDCWHO from './HDCWho';
import HDCFAQ from './HDCFAQ';
import TUCITAHDC from './TuCitaHDC';
import HDCSERV from './HDCServ';
import SERVICIOVIEW from './ServiciosView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={INICIO}  options={{headerShown:false}}/>
        <Stack.Screen name='MenuUser' component={MENUUSER} options={{headerShown:false}}/>
        <Stack.Screen name='MenuAdmin' component={MENUADMIN} options={{headerShown:false}}/>
        <Stack.Screen name='TecnicosHDC' component={TECNICOSHDC} options={{headerShown:false}}/>
        <Stack.Screen name='ModUserHDC' component={MODUSERHDC} options={{headerShown:false}}/>
        <Stack.Screen name='TuCitaHDC' component={TUCITAHDC} options={{headerShown:false}}/>
        <Stack.Screen name='HDCServ' component={HDCSERV} options={{headerShown:false}}/>
        <Stack.Screen name='ElimUser' component={ELIMUSER} options={{headerShown:false}}/>
        <Stack.Screen name='HDCWho' component={HDCWHO} options={{headerShown:false}}/>
        <Stack.Screen name='HDCFAQ' component={HDCFAQ} options={{headerShown:false}}/>
        <Stack.Screen name='ServiciosView' component={SERVICIOVIEW} options={{headerShown:false}}/>
        <Stack.Screen name='RegistroHDC' component={REGISTROHDC}/>
        <Stack.Screen name='CitasHDC' component={CITASHDC}/>
        <Stack.Screen name='RegistroHDCA' component={REGISTROHDCA}/>
        <Stack.Screen name='Servicios' component={SERVICIOS}/>
        <Stack.Screen name='MapaHDC' component={MAPAHDC}/>
        <Stack.Screen name="Pantallab" component={PANTALLAB} options={{headerShown:false}}/> 
        <Stack.Screen name="id" component={ID} options={{headerShown:false}}/>
        <Stack.Screen name="MostrarCita" component={MOSTRARCITA} options={{headerShown:false}}/>
        <Stack.Screen name="Bajas" component={BAJAS} 
        options={{headerBackVisible : false}}/>

        {/*   
        <Stack.Screen name="PantallaA" component={PANTALLAA} 
        options={{headerBackVisible : false}}/>
        <Stack.Screen name="Altas" component={ALTAS} 
        options={{headerBackVisible : false}}/>
        <Stack.Screen name="id" component={ID} 
        options={{headerBackVisible : false}}/>
         */}
        

        {/* <Stack.Screen name="Pantallac" component={PANTALLAC} 
        options={{headerBackVisible : false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
