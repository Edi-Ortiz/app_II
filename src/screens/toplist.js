import React, { useContext } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import {
  Container,
  Content,
  Fab,
  Icon,
  List,
  ListItem,
  Text,
  Body,
  Right,
} from "native-base";

const launchscreenBg = require("../../assets/fondo4.png");

// Utilizar el contexto de las canciones
import { NewSongContext } from "../Context/NewSongContext";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const SongListSreen = ({ navigation }) => {
  const { songs } = useContext(NewSongContext);

  return (
    <Container>
     <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <List style={styles.list}>
          {songs
            ? songs.map((song) => (
                <ListItem
                  key={song.id.toString()}
                  >
                  <Body>
                  <Text numberOfLines={2} style={styles.name}>Numero de cancion: {song.id}</Text>
                    <Text numberOfLines={2} style={styles.name}>Nombre: {song.name}</Text>
                    <Text numberOfLines={2} style={styles.name}>Duracion: {song.duration}</Text>
                    <Text numberOfLines={2} style={styles.name}>Artista: {song.artist}</Text>
                    <Text numberOfLines={2} style={styles.name}>año: {song.year}</Text>
                  </Body>
                </ListItem>
              ))
            : null}
        </List>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create ({
  
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
  },
  list:{
    backgroundColor: "royalblue",
  },
});


export default SongListSreen;