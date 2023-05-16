import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LocationCard from "../components/LocationCard";

const Locations = () => {
  const data = useStaticQuery(graphql`
    query getLocations {
      allSanityLocation {
        edges {
          node {
            id
            city
            address1
            address2
            email
            mapsURL
            phone
            postcode
            county
            image {
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const locations = data.allSanityLocation.edges;

  return (
    <main>
      <h1>Contact Us</h1>
      <p>
        Whether you have a question about adoption, want to volunteer, or simply
        want to say hello, we would love to hear from you, please don't hesitate
        to get in touch with us – we can't wait to hear from you!
      </p>

      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={4}
        component="ul"
        sx={{ listStyle: "none", p: 0 }}
      >
        {locations.map((location) => {
          const locationData = location.node;
          console.log("|loca", locationData);

          return (
            <Box>
              <h2>{location.node.city}</h2>
              <LocationCard locationData={locationData} />
            </Box>
          );
        })}
      </Stack>
    </main>
  );
};

export const Head = () => <title>Adopt A Cat</title>;

export default Locations;
