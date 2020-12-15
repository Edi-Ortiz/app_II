import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import {
  Button,
  Container,
  Content,
  H1,
  Text,
  Textarea,
  Spinner,
  View,
} from "native-base";
import * as Font from "expo-font";
const launchscreenBg = require("../../assets/fondo5.png");
const [number, setNumber] = useState("");
const { addDropSong, refreshSongs } = newSongContext;

export default function App() {


  

  return (
    <Container>
      <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
      <Text style={stylesss.H1}>Ingrese el numero de la cancion que desee eliminar</Text>
        <Textarea
          rowSpan={1}
          bordered
          placeholder="Numero de la cancion"
          value={number}
          onChangeText={setNumber}
          />

    <Button style={{alignSelf: "center", top : 50 }}
          stydle={styles.button}
          onPress={handlerNewSong}
          
        >
          <Text>Eliminar</Text>
        </Button>
      
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
const stylesss = StyleSheet.create({
  texto: {
    flex: 1,
    justifyContent:"center",
  },
  H1: {
     fontSize:25,
     color:"#FFFFFF",
     fontFamily: "Roboto",
  },
});
