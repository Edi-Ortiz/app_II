import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Text,
  Textarea,
  Spinner,
  Button,
  H1,
  Form,
} from "native-base";
import * as Font from "expo-font";


// Importar el contexto de las canciones
import { NewSongContext } from "../Context/NewSongContext";
import { database } from "./Base/db";

// Pantalla de ModifyContact
const ModifySongScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [name, setName] = useState(null);
  const [duration, setDuration] = useState(null);
  const [artist, setArtist] = useState(null);
  const [year, setYear] = useState(null);
  const [errorSong, setErrorSong] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const updateSongById = useContext(NewSongContext);
  const { songName, getSongById, updateSong } = updateSongById;


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

  // Funcion que se ejecuta en el use effect
  const getSongName = (id, Songname)=>
{
  const getSongName = () => {
    getSongById(id);
  };

  getSongById();

  // Verificar si la nota tiene valor previo a extraer sus valores
  if (songName) {
    setName(songName[0].name);
    setDuration(songName[0].duration);
    setArtist(songName[0].artist);
    setYear(songName[0].year);
  }
};

  useEffect(() => {
    getSongName(id, name);
  }, []);

  // Funcion para actualizar el contacto
  const handlerUpdateSong = async () => {
    // Validar que el contacto tiene valor
    if (name) {
      await updateSong(name, duration, artist, year, id);
      // Regresar a la pantalla anterior
      navigation.goBack();
    } else {
      setErrorSong(true);
    }
  };
  
  // Spinner 
  if (!fontsLoaded) {
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );
  }
 
  return (
    <Content>
      <Container style={styles.container}>
        <Form>
        <H1 style={styles.h1}>actualizar nombre de cancion</H1>
              
          <Textarea
            value={name}
            bordered
            
            onChangeText={setName}
            style={styles.caja}
          />
        
        <H1 style={styles.h1}>actualizar duracion de cancion</H1>
       <Textarea
          value={duration}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChangeText={setDuration}
        />
        
        <H1 style={styles.h1}>actualizar artista de cancion</H1>
        <Textarea
          value={artist}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChangeText={setArtist}
        />

        <H1 style={styles.h1}>actualizar año de cancion</H1>
        <Textarea
          value={year}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChangeText={setYear}
        />

        {/* Boton para actualizar */}
        <Button style={styles.button} block onPress={handlerUpdateSong}>
          <Text style={styles.si} >
            Guardar</Text>
        </Button>
        </Form>
      </Container>
    </Content>
  );
};


// Estillos para la pantalla de ModifyContact
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  si: {
    color: "#7ed321",
  },
  error: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
  h1:{
    marginLeft:90,
    marginTop:30,
    marginBottom: 30,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 5,
  },
  caja: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 25,
    height: 40,
    borderColor: "black",
    backgroundColor: "white",
  },
});

export default ModifySongScreen;