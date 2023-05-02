import React, { useState } from "react";
import { useFavourites } from "../FavouritesContext";

import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { RemoveCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
  const { favouriteIDs, modifyFavourite } = useFavourites();

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
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
          <FavoriteIcon />
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

          return (
            <Stack
              key={item.node.id}
              sx={{
                justifyContent: "space-between",
                padding: "0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link to={`/adopt-a-cat/${item.node.slug.current}`}>
                  <Button variant="text">
                    <Box sx={{ padding: "0px 5px 0px 5px" }}>
                      <GatsbyImage image={image} alt={item.node.name} />
                    </Box>
                    <Typography
                      textAlign="left"
                      sx={{ margin: "0px 5px 0px 5px" }}
                    >
                      {item.node.name}
                    </Typography>
                  </Button>
                </Link>
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  onClick={() => modifyFavourite(item.node.id)}
                >
                  <RemoveCircle />
                </IconButton>
              </Box>
            </Stack>
          );
        })}
      </Menu>
    </>
  );
};

export default FavouriteList;
