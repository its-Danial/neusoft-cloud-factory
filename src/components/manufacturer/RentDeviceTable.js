import BidButton from "../helper/BidButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { StyledTableCell, StyledTableRow } from "../ui/StyledTable";

function createData(
  number,
  id,
  name,
  category,
  specifications,
  status,

  edit
) {
  return {
    number,
    id,
    name,
    category,
    specifications,
    status,
    edit,
  };
}

const defaultRows = [
  createData(
    1,
    91741,
    "Hitachi L-300",
    "E-Lathe",
    "L300P 10 Hp 75 kW 200 v",
    "Available",
    <BidButton text={"Rent"} />
  ),
  createData(
    2,
    58232,
    "Xiaomi T-213",
    "E-Lathe",
    "L300P 10 Hp 75 kW 200 v",
    "Unavailable",
    <BidButton text={"Rent"} disabled={true} />
  ),
  createData(
    3,
    16145,
    "Hitachi L-300",
    "E-Lathe",
    "L300P 10 Hp 75 kW 200 v",
    "Available",
    <BidButton text={"Rent"} />
  ),
  createData(
    4,
    23452,
    "Xiaomi F-50",
    "Milling",
    "L300P 10 Hp 75 kW 200 v",
    "Unavailable",
    <BidButton text={"Rent"} disabled={true} />
  ),
];

const RentDeviceTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, mt: "10px" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell align="left">Device ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Specifications</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        {/* number, id, name, category, specifications, status, edit, */}
        <TableBody>
          {defaultRows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">
                {row.specifications}
              </StyledTableCell>

              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.edit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RentDeviceTable;
