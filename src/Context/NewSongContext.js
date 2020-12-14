import React, { useEffect, createContext, useState } from "react";
import { database } from "../screens/Base/db";

// Crear el contexto de las notas
export const NewSongContext = createContext({});

export const NotesContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { songs: initialSongs, children } = props;

  // Almacenar los valores en el estado
  const [songs, setSongs] = useState(initialSongs);
  const [song, setSong] = useState ("");
  //const [name, setName] = useState("");
  //const [duration, setDuration] = useState("");
  //const [artist, setArtist] = useState("");
  //const [year, setYear] = useState("");

  // Cargar u obtener las canciones
  useEffect(() => {
    refreshSongs();
  }, []);

  const refreshSongs = () => {
    return database.getMusic(setSongs);
  };

  const addNewSong = async (name, duration, artist, year) => {
    await database.insertSong(name, duration, artist, year, refreshSongs);
    return refreshSongs();
  };


  const getSongById = (id) => {
    return database.getSongById(id, setSong);

    //console.log(response);

    // Obtener el valor de la primera posición del arreglo
    // const value = song[0];
    // setSong(value);

    // console.log(value);
    // console.log(song);
  };

  // Crear el objeto de contexto
  const songContext = {
    songs,
    song,
    addNewSong,
    getSongById,
  };

  // Pasar los valores al proveedor y retornarlo
  eturn (
    <NewSongContext.Provider value={songContext}>
      {children}
    </NewSongContext.Provider>
  );
};