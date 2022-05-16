import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditDeleteButtons from "../helper/EditDeleteButtons";
import { StyledTableCell, StyledTableRow } from "../ui/StyledTable";

import TextField from "@mui/material/TextField";

function createData(
  id,
  factoryName,
  factoryInfo,
  manager,
  contact,
  userName,
  status
) {
  return { id, factoryName, factoryInfo, manager, contact, userName, status };
}

export default function FactoryDetails() {
  const onDeleteClickHandler = (id) => {
    console.log("delete", id);
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };
  const onEditClickHandler = (id) => {
    console.log("edit", id);
  };

  // List of factory objects
  const defaultRows = [
    createData(
      41241,
      "factory name1",
      "factory info1",
      "manager",
      "contact",
      "username1",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={41241}
      />
    ),
    createData(
      83712,
      "factory name2",
      "factory info2",
      "manager",
      "contact",
      "username2",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={83712}
      />
    ),
    createData(
      36612,
      "factory name3",
      "factory info3",
      "manager",
      "contact",
      "username3",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={36612}
      />
    ),
  ];

  const [rows, setRowData] = useState(defaultRows);

  //for searching
  const [searchResult, setSearchResults] = useState(rows);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchResults(rows);
  }, [rows]);

  useEffect(() => {
    if (searchText.trim().length < 1) {
      setSearchResults(rows);
    }
  }, [searchText, rows]);

  const onSearchHandler = (event) => {
    setSearchText(event.target.value);

    setSearchResults((prevData) =>
      prevData.filter((row) => {
        return row.factoryName.includes(searchText);
      })
    );
  };

  return (
    <>
      <TextField
        // style={{ marginLeft: "10px", marginBottom: "10px" }}
        style={{ float: "right", margin: "5px" }}
        size="small"
        id="outlined-basic"
        label="Search Field"
        variant="outlined"
        onChange={onSearchHandler}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Factory Name</StyledTableCell>
              <StyledTableCell align="left">Factory Info</StyledTableCell>
              <StyledTableCell align="left">Manager</StyledTableCell>
              <StyledTableCell align="left">Contact</StyledTableCell>
              <StyledTableCell align="left">Username</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResult.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.factoryName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.factoryInfo}
                </StyledTableCell>
                <StyledTableCell align="left">{row.manager}</StyledTableCell>
                <StyledTableCell align="left">{row.contact}</StyledTableCell>
                <StyledTableCell align="left">{row.userName}</StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
