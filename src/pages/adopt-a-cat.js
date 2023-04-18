import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import CatCard from "../components/CatCard";

// MUI/Styling
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const Head = () => <title>Adopt A Cat</title>;

const AdoptACat = (props) => {
  console.log("<<<<props", props);
  const cats = props.data.allSanityCat.edges;
  console.log("<<<<cats", cats);
  return (
    <Layout>
      <main>
        <h1>This will eventually be a list of cats!</h1>
        <p>For now here are a couple hardcoded links:</p>
        <Grid container spacing={2}>
          {cats.map((cat) => {
            return (
              <Grid item xs={6} md={4}>
                <CatCard
                  title={cat.node.name}
                  image={cat.node.mainImage.asset.gatsbyImageData}
                  slug={cat.node.slug.current}
                  key={cat.node.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </Layout>
  );
};

export default AdoptACat;

export const query = graphql`
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
`;
