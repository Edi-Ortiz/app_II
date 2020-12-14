import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/fondo2.png");


const paginaNavegacion = ({navigation}) => {


  const touch = () => {
    navigation.navigate("Top List", {})
  }

  const salu = () => {
    navigation.navigate("Opciones", {})
  }

  
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={touch} name = "alfabeto"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text >Top List</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Button rounded dark onPress={salu} name = "saludos"
              style={{ backgroundColor: "#000000", alignSelf: "center" }}>
              <Text>Opciones</Text>
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

export default paginaNavegacion;