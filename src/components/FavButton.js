import React, { useEffect, useState, useContext } from "react";
import { useFavourites } from "../FavouritesContext";
import Button from "@mui/material/Button";

function FavButton({ currentID }) {
  const [favouriteIDs, setFavouriteIDs] = useFavourites();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (favouriteIDs.includes(currentID)) {
      console.log("<<<<matches");

      setIsFav(true);
    }
  }, []);

  const updateFav = () => {
    console.log("<<<favbutn", currentID);
    if (!isFav) {
      setFavouriteIDs([...favouriteIDs, currentID]);
      setIsFav(true);
    }
    if (isFav) {
      setFavouriteIDs([...favouriteIDs.filter((el) => el !== currentID)]);
    }
    setIsFav(!isFav);

    // setFavouriteIDs([...favouriteIDs, currentID]);
  };
  return (
    <Button variant="outlined" onClick={updateFav}>
      {!isFav ? "Favourite" : "Remove"}
    </Button>
  );
}

export default FavButton;
