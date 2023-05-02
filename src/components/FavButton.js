import React, { useEffect, useState } from "react";
import { useFavourites } from "../FavouritesContext";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
    <Button
      variant="contained"
      size="small"
      fullWidth="true"
      startIcon={isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      onClick={() => handleClick(currentID)}
      sx={{ marginTop: 3 }}
    >
      {isFav ? "Remove" : "Favourite"}
    </Button>
  );
}

export default FavButton;
