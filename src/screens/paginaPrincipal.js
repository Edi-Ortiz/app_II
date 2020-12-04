import React, {useEffect, useState } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

const launchscreenBg = require("../../assets/fondo1.png");

const PaginaPrincipal = ({navigation}) => {
  const [gifs] = useState("");

  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
     }, [])

const touch = () => {
    navigation.navigate("Navegacion", { gifs })

  }
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          
          <View style={{ marginBottom: 200 }}>
            <Button large dark onPress={touch} name="gifs" style={{ backgroundColor: "#000000", alignSelf: "center", top : 550 }}>
              <Text>BEGIN</Text>
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

export default PaginaPrincipal;

//<View style={styles.logoContainer}>
//<ImageBackground source={launchscreenLogo} style={styles.logo} />
//</View>
//