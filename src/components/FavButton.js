import React, { useEffect, useState } from "react";
import { useFavourites } from "../FavouritesContext";
import Button from "@mui/material/Button";

function FavButton({ currentID }) {
  const { favouriteIDs, setFavouriteIDs, modifyFavourite } = useFavourites();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (favouriteIDs.includes(currentID)) {
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
  };
  return (
    <Button variant="outlined" onClick={() => modifyFavourite(currentID)}>
      {isFav ? "Remove" : "Favourite"}
    </Button>
  );
}

export default FavButton;
