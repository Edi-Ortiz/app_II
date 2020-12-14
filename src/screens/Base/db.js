import React from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("music.db");

const getMusic = (setMusic) => {
    db.transaction((tx) => {
        tx.executeSql(
            "select * from list",
            [],
            (_, {rows: {_array} }) =>{
                setMusic(_array);
            },
            (_t, error) => {
                console.log ("Error al momento de obtener las canciones");
                console.log(error);
            },
            (_t, _success) => {
                console.log("Informacion de las canciones Obtenida");
            }
        );
    });
};


const insertSong = async (name, duration, artist, year, succesFunc) => {
    db.transaction(
        (tx) => {
            tx.executeSql("insert into list (name, duration, artist, year) values (?, ?, ?, ?)",[
                name,
                duration,
                artist,
                year
            ]);
        },
        (_t, error) => {
            console.log("Error al insertar la cancion");
            console.log(error);
        },
        (_t, _success) => {
            successFunc;
        }
    );
};

const dropDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table list");
        },
        (_t, error) => {
          console.log("Error al eliminar la tabla de canciones");
          reject(error);
        },
        (_t, result) => {
          resolve(result);
        }
      );
    });
  };

  const getSongById = (id, setSongFunc) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from list where id = ?",
        [id],
        (_, { rows: { _array } }) => {
          setSongFunc(_array);
        },
        (_t, error) => {
          console.log("Error al momento de obtener la cancion");
          console.log(error);
        },
        (_t, _success) => {
          console.log("Cancion obtenida");
        }
      );
    });
  };
  

  const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists list (id integer primary key autoincrement, name text not null, duration text not null, artist text not null, year text not null);"
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Tabla creada!");
          resolve(success);
        }
      );
    });
  };

  const setupSongAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("insert into list (name, duration, artist, year) values (?,?,?,?)", [
            "Belgium",
            "2:58",
            "Lil Peep",
            "2016",
          ]);
        },
        (_t, error) => {
          console.log("Error al momento de insertar los valores por defecto");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };

  export const database = {
    getMusic,
    insertSong,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
    getSongById,
    setupSongAsync,
  };