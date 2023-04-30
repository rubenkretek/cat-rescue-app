import React, { useState } from "react";
import { useFavourites } from "../FavouritesContext";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { RemoveCircle } from "@mui/icons-material";

const FavouriteList = () => {
  const data = useStaticQuery(graphql`
    query getFavCats {
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
                  height: 35
                  width: 35
                )
              }
            }
          }
        }
      }
    }
  `);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const { favouriteIDs } = useFavourites();

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
  console.log("|favitems: ", favItems);

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
        {favItems.map((item) => {
          const image = item.node.mainImage?.asset?.gatsbyImageData;
          console.log("|item: ", item);

          return (
            <MenuItem key={item.node.id} onClick={handleCloseUserMenu}>
              <GatsbyImage image={image} alt={item.node.name} />
              <Typography textAlign="center">{item.node.name}</Typography>
              <RemoveCircle />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default FavouriteList;
