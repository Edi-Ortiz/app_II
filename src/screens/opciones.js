import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/fondo3.png");


const opciones = ({navigation}) => {
    
  const agregar = () => {
    navigation.navigate("Agregar", { })
  }

  const modificar = () => {
    navigation.navigate("Modificar", { })
  }

  const elimunar = () => {
    navigation.navigate("Eliminar", {})
  }

  
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={agregar} name = "alfabeto"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text >Agregar</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={modificar} name = "alfabeto"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text >Modificar</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={elimunar} name = "saludos"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>Eliminar</Text>
            </Button>
          </View>
          
        </ImageBackground>
      </Container>
    );
  }


const styles = StyleSheet.create ({
  
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
  
  },
});

export default opciones;