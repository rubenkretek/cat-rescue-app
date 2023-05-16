import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LocationCard({ locationData }) {
  const { city, address1, address2, email, mapsURL, phone, postcode, county } =
    locationData;
  return (
    <Box component="li">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          <Card sx={{ paddingY: 1, paddingX: 2 }}>
            <h2>Write to us</h2>
            <p>
              You can email us at {email}. We will endevour to get back to you
              within 24 hours of recieving your message
            </p>
            <Button sx={{ mt: 2 }} variant="contained">
              Email us
            </Button>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          <Card sx={{ p: 2 }}>
            <h2>Visit us</h2>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            ></Stack>
            <Box>{address1}</Box>
            <Box>{address2}</Box>
            <Box>{city}</Box>
            <Box>{county}</Box>
            <Box>{postcode}</Box>
            <Box>{mapsURL}</Box>
            <Button sx={{ mt: 2 }} variant="contained">
              Get directions
            </Button>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          <Card sx={{ p: 2 }}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
              height="100%"
            >
              <Box>
                <h2>Call us</h2>
              </Box>
              <Box>
                For inquiries or emergencies, please give us a call at our cat
                rescue center's contact number {phone}.
              </Box>
              <Box>
                <Button sx={{ mt: 2 }} variant="contained">
                  Call us
                </Button>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LocationCard;
