import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { PortableText } from "@portabletext/react";

// Components
import InfoCard from "../components/Info/InfoCard";

// MUI/Styling
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import PlaceIcon from "@mui/icons-material/Place";

export default function CatTemplate({ data }) {
  const cat = data.sanityCat;
  console.log("<<<<<", cat);
  const image = cat.mainImage.asset?.gatsbyImageData;
  const bodyText = cat.body;

  console.log("<<<<<bodyText", bodyText);
  return (
    <Layout>
      <div>
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Box>
              <GatsbyImage image={image} alt={cat.name} />
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Box>
              <h1>{cat.name}</h1>
              <h2>
                <PlaceIcon />
                {cat.location.city}
              </h2>

              <div>
                <InfoCard catInfo={cat.catInfo} />
              </div>
              <div>
                <PortableText value={bodyText} />
              </div>
              <Link to="/adopt-a-cat">Back to all cats</Link>
            </Box>
          </Grid>
        </Grid>
      </div>
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
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
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
