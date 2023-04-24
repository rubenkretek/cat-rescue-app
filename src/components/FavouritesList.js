import React, { useEffect, useState, useContext } from "react";
import { useFavourites } from "../FavouritesContext";

import { useStaticQuery, graphql } from "gatsby";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const FavouriteList = () => {
  const data = useStaticQuery(graphql`
    query getAllCats {
      allSanityCat(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            name
            slug {
              current
            }
            mainImage {
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  placeholder: BLURRED
                  height: 250
                  width: 350
                )
              }
            }
          }
        }
      }
    }
  `);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [favouriteIDs, setFavouriteIDs] = useFavourites();

  const allItems = data.allSanityCat.edges;
  const favItems = allItems.filter((item) =>
    favouriteIDs.includes(item.node.id)
  );

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open favourites">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {favItems.map((item) => (
          <MenuItem key={item.node.id} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{item.node.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default FavouriteList;
