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
import { NewSongContext } from "../Context/NewSongContext";
import * as Font from "expo-font";
const launchscreenBg = require("../../assets/fondo5.png");



const deleteScreen = ({ navigation }) => {
  const [id, setId] = useState("");
  const deleteSongById = useContext(NewSongContext)
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [errorSong, setErrorSong] = useState(false);
  const { deleteSong, refreshSongs } = deleteSongById;
  const [enableSave, setEnableSave] = useState(true);

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

  useEffect(() => {
    if (id) setEnableSave(false);
    else setEnableSave(true);
  }, [id]);

  const handlerDelete = async () => {
    if (id) {
      await deleteSong(id, refreshSongs);

      // Regresar a la pantalla anterior
      navigation.goBack();
    } else {
      setErrorSong(true);
    }
  };
  if (!fontsLoaded)
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    )


  return (
    <Content>
      <Container>
      <ImageBackground source={launchscreenBg} style={(styles.imageContainer)} style={(stylesss.texto)}> 
        <Text style={stylesss.H1}>Ingrese el numero de la  a eliminar</Text>
        <Textarea
          rowSpan={1}
          bordered
          placeholder="Nombre de la canción"
          value={id}
          onChangeText={setId}
          />
        <Button style={{alignSelf: "center", top : 50 }}
          stydle={styles.button}
          onPress={handlerDelete}
          
          // disabled={enableSave}
        >
          <Text>Eliminar</Text>
        </Button>
        </ImageBackground>
      </Container>
    </Content>
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

export default deleteScreen;
