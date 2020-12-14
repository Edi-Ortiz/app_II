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

const launchscreenBg = require("../../assets/fondo2.png");

// Importar el contexto de las notas
import { NewSongContext } from "../Context/NewSongContext";


const NewSongScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [enableSave, setEnableSave] = useState(true);
  const [errorSong, setErrorSong] = useState(false);
  const newSongContext = useContext(NewSongContext);
  const { addNewSong, refreshSongs } = newSongContext;
  
  // Cargar la fuente de manera asíncrona
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

  // Ejecutar el efecto cuando el valor de la nota cambie
  useEffect(() => {
    if (name&&duration&&artist&&year) {
      setEnableSave(false);
    }
    else setEnableSave(true);
  }, [name, duration, artist, year]);

  const handlerNewSong = async () => {
    // Validar que la nota tiene valor
    if (name&&duration&&artist&&year) {
      await addNewSong(name, duration, artist, year, refreshSongs);

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
    );

  return (
    <Content>
      <Container>
      <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <H1>Ingresa el nombre de la cancion</H1>
        <Textarea
          rowSpan={1}
          bordered
          placeholder="Nombre de la cancion"
          value={name}
          onChangeText={setName}
          />
        <H1>Ingresa la duracion de la cancion</H1>
        <Textarea
          rowSpan={1}
          bordered
          placeholder="Duracion de la cancion"
          value={duration}
          onChangeText={setDuration}
          />

        <H1>Ingresa el nombre del artista</H1>
        <Textarea
          rowSpan={1}
          bordered
          placeholder="Nombre de Artista"
          value={artist}
          onChangeText={setArtist}
          />

        <H1>Ingresa el año en que se estreno la cancion</H1>
        <Textarea
          rowSpan={1}
          bordered
          placeholder="0000"
          value={year}
          onChangeText={setYear}
          />
        <Button
          style={styles.button}
          onPress={handlerNewSong}
          // disabled={enableSave}
        >
          <Text>Guardar</Text>
        </Button>
        </ImageBackground>
      </Container>
    </Content>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems:"center",
    width: null,
    height: null
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: 10,
  },
  button: {
    fontFamily: "Roboto",
  },
  error: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
});

export default NewSongScreen;
