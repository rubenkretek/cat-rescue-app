import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function LatestBlog() {
  // Will need to change this to pull in data from blog post when built
  const data = useStaticQuery(graphql`
    query getAllCats {
      allSanityCat(
        filter: { slug: { current: { ne: null } } }
        limit: 4
        sort: { _createdAt: DESC }
      ) {
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
  const latestCats = data.allSanityCat.edges;
  console.log("|-latest caats", latestCats);

  return (
    <Box>
      <Box>
        <h2>News</h2>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {latestCats.map((cat) => {
            return (
              <Grid item xs={12} md={6}>
                <Card>
                  <CardActionArea>
                    <Link to={`/adopt-a-cat/${cat.node.slug.current}`}>
                      <GatsbyImage
                        image={cat.node.mainImage.asset.gatsbyImageData}
                        alt={cat.node.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {cat.node.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default LatestBlog;
