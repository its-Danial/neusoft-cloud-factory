import React from "react";
// import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";

const PageNumber = () => {
  return (
    <Box sx={{ alignItems: "center", mt: "20px" }}>
      <Stack
        sx={{ display: "flex", alignItems: "center", mt: "20px" }}
        spacing={2}
      >
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All" }]}
          count={1}
          rowsPerPage={4}
          page={1}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={console.log("onPageChange")}
          onRowsPerPageChange={console.log("onRowsPerPageChange")}
          ActionsComponent={console.log("ActionsComponent")}
        />

        {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
      </Stack>
    </Box>
  );
};

export default PageNumber;
