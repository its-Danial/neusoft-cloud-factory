import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const PageNumber = () => {
  return (
    <Box sx={{ alignItems: "center", mt: "20px" }}>
      <Stack
        sx={{ display: "flex", alignItems: "center", mt: "20px" }}
        spacing={2}
      >
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Box>
  );
};

export default PageNumber;
