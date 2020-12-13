import React, {useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/fondo1.png");

const paginaPrincipal = ({navigation}) => {
const [gifs, setGifs] = useState("");


const touch = () => {
    navigation.navigate("Navegacion", { gifs })

  }
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          
          <View style={{ marginBottom: 200 }}>
            <Button large dark onPress={touch} name="gifs" style={{ backgroundColor: "#000000", alignSelf: "center", top : 550 }}>
              <Text>Inicio</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    )
  }



const styles = StyleSheet.create ({
  imageContainer: {
    flex: 1,
    alignItems:"center",
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: 80,
    marginBottom: 30
  
  }
});

export default paginaPrincipal;

//<View style={styles.logoContainer}>
//<ImageBackground source={launchscreenLogo} style={styles.logo} />
//</View>
//