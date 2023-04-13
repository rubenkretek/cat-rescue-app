import React from "react";

// MUI/Styling
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function InfoItem({ label, value }) {
  if (value === true) {
    value = "Yes";
  }
  if (value === false || value === null) {
    value = "No";
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="subtitle1" component="span">
          {label}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" component="span">
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export default InfoItem;
