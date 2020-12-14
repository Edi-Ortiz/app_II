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

// Utilizar el contexto de notas
import { NewSongContext } from "../Context/NewSongContext";

const SongListSreen = ({ navigation }) => {
  const { songs } = useContext(NewSongContext);

  return (
    <Container>
       <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
      <Content>
        <List>
          {songs
            ? songs.map((song) => (
                <ListItem
                  key={song.id.toString()}
                  onPress={() => {
                    navigation.navigate("songModify", { id: song.id });
                  }}
                >
                  <Body>
                    <Text numberOfLines={2}>{song.song}</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              ))
            : null}
        </List>
      </Content>
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
  
  }
});


export default SongListSreen;