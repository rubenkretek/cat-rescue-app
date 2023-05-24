import React from "react";
import { graphql, Link } from "gatsby";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { GatsbyImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Hero({ headline, image }) {
  console.log("| image", image);

  return (
    <>
      <Box>
        <Box sx={{ py: 8, px: 4 }}>
          <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
            {headline}
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ my: 2 }}
          >
            <Button variant="outlined">Donate</Button>
            <Button variant="contained">Adopt a cat</Button>
          </Stack>
        </Box>
        <GatsbyImage image={image.asset.gatsbyImageData} alt={headline} />
      </Box>
    </>
  );
}

export default Hero;
