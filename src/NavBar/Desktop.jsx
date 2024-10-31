import { Box, Grid2, Stack } from "@mui/material";
import React from "react";

const Desktop = () => {
  return (
    <>
      <Stack className="bg-slate-100" direction={"row"}>
        <Box>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1730413147/KPGU%20NEW/LOGO/logo_oyybsl.svg"
            className="w-96"
            alt=""
          />
        </Box>
        <Box>
          <Grid2 container></Grid2>
        </Box>
      </Stack>
    </>
  );
};

export default Desktop;
