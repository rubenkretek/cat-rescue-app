import React, { useEffect, useState } from "react";
import { useFavourites } from "../FavouritesContext";
import Button from "@mui/material/Button";

function FavButton({ currentID }) {
  const { favouriteIDs, modifyFavourite } = useFavourites();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (favouriteIDs.includes(currentID)) {
      setIsFav(true);
    }
  }, [isFav, favouriteIDs, currentID]);

  const handleClick = (currentID) => {
    modifyFavourite(currentID);
    setIsFav(!isFav);
  };

  return (
    <Button variant="outlined" onClick={() => handleClick(currentID)}>
      {isFav ? "Remove" : "Favourite"}
    </Button>
  );
}

export default FavButton;
