import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import paginaPrincipal from "./src/screens/paginaPrincipal";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Music Top List">
      <Stack.Screen name="Music Top List" component={paginaPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


