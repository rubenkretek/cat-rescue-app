import React from "react";
import InfoItem from "./InfoItem";

// MUI/Styling
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";

function InfoCard({ catInfo }) {
  console.log("<<<<catInfo", catInfo);
  const dob = catInfo.dob ? catInfo.dob.replace(/ago/g, "old") : null;
  const dobString = dob ? dob : "Unknown";
  return (
    <Box>
      <Card>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <InfoItem label="Age" value={dobString} />
          </Grid>
          <Grid xs={12} md={6}>
            <InfoItem
              label="Can live with other cats"
              value={catInfo.likesCats}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <InfoItem
              label="Can live with other cats"
              value={catInfo.likesCats}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <InfoItem
              label="Can live with children"
              value={catInfo.likesChildren}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <InfoItem
              label="Likes older families"
              value={catInfo.likesOlderFamilies}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default InfoCard;
