import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import ThemeToggleButton from "./ThemeToggleButton";
import { useSiteSettings } from "../context/SiteSettingsProvider";
import ContextProvider from "../context/ContextProvider";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();
  const themeMode = theme.palette.mode;
  const { siteSettings } = useSiteSettings();

  const logoImg = siteSettings.logo.asset.gatsbyImageData;
  const logoImgWhite = siteSettings.logoWhite.asset.gatsbyImageData;

  return (
    <footer>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Container maxWidth="xl">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Box sx={{ maxWidth: "150px" }}>
              <GatsbyImage
                image={themeMode === "light" ? logoImg : logoImgWhite}
                alt="Logo"
              />
            </Box>
            <Stack direction="row" spacing={2}>
              <Button variant="text">Item 1</Button>
              <Button variant="text">Item 2</Button>
              <Button variant="text">Item 3</Button>
            </Stack>
            <Stack direction="row" spacing={2}>
              <IconButton sx={{ p: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ p: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ p: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ p: 1 }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
            <p>© 2021 Cat Rescue</p>
            <ThemeToggleButton />
          </Stack>
        </Container>
      </Paper>
    </footer>
  );
}

export default Footer;
