import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Block({ title, description, image, link }) {
  return (
    <Grid container spacing={4}>
      <Grid xs={12} md={6}>
        <div>
          <GatsbyImage image={image} alt={title} />
        </div>
      </Grid>
      <Grid
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <h3>{title}</h3>
          <div>{description}</div>
          <Button variant="contained" sx={{ mt: 3 }}>
            Read more
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Block;
