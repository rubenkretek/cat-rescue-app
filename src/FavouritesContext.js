import React, { useContext, useState, createContext } from "react";

const FavouritesContext = createContext();
const FavouritesUpdateContext = createContext();

export function useFavourites() {
  return useContext(FavouritesContext);
}

export function useFavouritesUpdate() {
  return useContext(FavouritesUpdateContext);
}

export function FavouritesProvider({ children }) {
  const [favouriteIDs, setFavouriteIDs] = useState([]);

  function modifyFavourite(id) {
    console.log("|favourite added");
    console.log("|favourite added", id);
  }

  return (
    <FavouritesContext.Provider
      value={{ favouriteIDs, setFavouriteIDs, modifyFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
