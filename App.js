import React, {useState, useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import paginaPrincipal from "./src/screens/paginaPrincipal";
import paginaNavegacion from "./src/screens/paginaNavegacion";
import opciones from "./src/screens/opciones";
import toplist from "./src/screens/toplist";
import agregar from "./src/screens/agregar";
import eliminar from "./src/screens/eliminar";
import modificar from "./src/screens/modificar";
import * as Font from "expo-font"
import {Content, Spinner} from "native-base"

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }).then(() => {
        setFontsLoaded(true);
      });
    };
  
    loadFontsAsync();
  }, []);

  if (!fontsLoaded)
    return (
      <Content>
        <Spinner color="blue" />
      </Content>
    );


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Music Top List">
      <Stack.Screen name="Music Top List" component={paginaPrincipal} />
      <Stack.Screen name="Navegacion" component={paginaNavegacion} />
      <Stack.Screen name="Opciones" component={opciones} />
      <Stack.Screen name="Agregar" component={agregar} />
      <Stack.Screen name="Top List" component={toplist} />
      <Stack.Screen name="Modificar" component={modificar} />
      <Stack.Screen name="Eliminar" component={eliminar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


