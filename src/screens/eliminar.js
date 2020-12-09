import React  from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Container, } from "native-base";

const launchscreenBg = require("../../assets/fondo5.png");

export default function App() {


  return (
    <Container>
      <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
      
      
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
  
  }
});
