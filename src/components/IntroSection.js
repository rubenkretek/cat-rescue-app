import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function IntroSection({ title, paragraph }) {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 4, sm: 6, md: 10 } }}>
        <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <Typography variant="p" component="p" sx={{ textAlign: "center" }}>
          {paragraph}
        </Typography>
      </Box>
    </Container>
  );
}

export default IntroSection;
