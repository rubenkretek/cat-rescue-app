import React from "react";
import { Link } from "gatsby";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <nav>
      <Stack direction="row" spacing={2}>
        <div>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </div>
        <div>
          <Link to="/adopt-a-cat">Adopt a Cat</Link>
        </div>
        <div>
          <Link to="/locations">Locations</Link>
        </div>
      </Stack>
    </nav>
  );
}

export default Navbar;
