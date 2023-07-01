import React from "react";
import { graphql, Link } from "gatsby";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { GatsbyImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Hero({ title, headline, image }) {
  console.log("| image", image);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "background.light",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: { md: "600px" },
            display: { sm: "flex" },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              py: { xs: 6, md: 8 },
              px: { xs: 2, md: 4 },
              flex: "1 1 0px",
              display: { md: "flex" },
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{ textAlign: "left", color: "primary.light" }}
              color="primary"
            >
              {title}
            </Typography>
            <Typography variant="h1" component="h1" sx={{ textAlign: "left" }}>
              {headline}
            </Typography>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              sx={{ my: 2 }}
            >
              <Button variant="outlined">Donate</Button>
              <Button variant="contained">Adopt a cat</Button>
            </Stack>
          </Box>
          <Box
            sx={{
              flex: "1 1 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <GatsbyImage image={image.asset.gatsbyImageData} alt={headline} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
