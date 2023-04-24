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

  function modifyFavourite() {
    console.log("<<<favourite added");
  }

  return (
    <FavouritesContext.Provider value={[favouriteIDs, setFavouriteIDs]}>
      <FavouritesUpdateContext.Provider value={modifyFavourite}>
        {children}
      </FavouritesUpdateContext.Provider>
    </FavouritesContext.Provider>
  );
}
