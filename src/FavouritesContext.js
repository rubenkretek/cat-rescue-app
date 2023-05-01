import React, { useContext, useState, createContext } from "react";

const FavouritesContext = createContext();

export function useFavourites() {
  return useContext(FavouritesContext);
}

export function FavouritesProvider({ children }) {
  const [favouriteIDs, setFavouriteIDs] = useState([]);

  function modifyFavourite(currentID) {
    console.log("|Modifyfav ran");

    if (favouriteIDs.includes(currentID)) {
      setFavouriteIDs([...favouriteIDs.filter((el) => el !== currentID)]);
    } else {
      setFavouriteIDs([...favouriteIDs, currentID]);
    }
  }

  return (
    <FavouritesContext.Provider
      value={{ favouriteIDs, setFavouriteIDs, modifyFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
