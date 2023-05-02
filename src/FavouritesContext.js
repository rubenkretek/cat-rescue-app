import React, { useContext, useState, createContext, useEffect } from "react";

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

  useEffect(() => {
    const localFavouriteIDs = JSON.parse(localStorage.getItem("favouriteIDs"));
    if (!localFavouriteIDs) return;
    setFavouriteIDs(localFavouriteIDs);
  }, []);

  useEffect(() => {
    localStorage.setItem("favouriteIDs", JSON.stringify(favouriteIDs));
  }, [favouriteIDs]);

  return (
    <FavouritesContext.Provider
      value={{ favouriteIDs, setFavouriteIDs, modifyFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
