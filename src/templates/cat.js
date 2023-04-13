import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { PortableText } from "@portabletext/react";

// Components
import InfoCard from "../components/Info/InfoCard";

// MUI/Styling
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import PlaceIcon from "@mui/icons-material/Place";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

export default function CatTemplate({ data }) {
  const cat = data.sanityCat;
  console.log("<<<<<", cat);
  const image = cat.mainImage.asset?.gatsbyImageData;
  const bodyText = cat.body;

  console.log("<<<<<bodyText", bodyText);
  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid xs={12} sm={5} md={4}>
          <Paper elevation={3} sx={{ padding: 3, position: "sticky", top: 16 }}>
            <Box sx={{ mb: 3, borderRadius: 1, overflow: "hidden" }}>
              <GatsbyImage image={image} alt={cat.name} />
            </Box>
            <InfoCard catInfo={cat.catInfo} />
          </Paper>
        </Grid>

        <Grid xs={12} sm={7} md={8}>
          <Box>
            <h1>{cat.name}</h1>
            <h2>
              <PlaceIcon />
              {cat.location.city}
            </h2>
            <div>
              <PortableText value={bodyText} />
            </div>
            <Stack
              spacing={2}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Link to="/adopt-a-cat">
                <Button variant="outlined">Back to all cats</Button>
              </Link>
              <Link to="/adopt-a-cat">
                <Button variant="contained">Enquire about {cat.name}</Button>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    sanityCat(slug: { current: { eq: $slug } }) {
      id
      name
      catInfo {
        dob(fromNow: true)
        likesCats
        likesChildren
        likesDogs
        likesOlderFamilies
        likesOutdoorIndoor
        sex
        breed {
          name
        }
      }
      location {
        city
      }
      mainImage {
        asset {
          gatsbyImageData(
            fit: FILLMAX
            placeholder: BLURRED
            height: 600
            width: 600
          )
        }
      }
      body {
        _type
        _rawChildren
        _key
        list
        style
        children {
          marks
          text
          _key
          _type
        }
      }
    }
  }
`;
