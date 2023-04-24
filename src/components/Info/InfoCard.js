import React from "react";
import InfoItem from "./InfoItem";

// MUI/Styling
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function InfoCard({ catInfo }) {
  const dob = catInfo.dob ? catInfo.dob.replace(/ago/g, "old") : null;
  const dobString = dob ? dob : "Unknown";
  return (
    <Box>
      <Stack
        spacing={2}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <InfoItem label="Age" value={dobString} />
        <InfoItem label="Can live with other cats" value={catInfo.likesCats} />
        <InfoItem label="Can live with other dogs" value={catInfo.likesDogs} />
        <InfoItem
          label="Can live with children"
          value={catInfo.likesChildren}
        />
        <InfoItem
          label="Likes older families"
          value={catInfo.likesOlderFamilies}
        />
      </Stack>
    </Box>
  );
}

export default InfoCard;
