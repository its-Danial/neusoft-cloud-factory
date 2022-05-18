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
import EditUserManagementForm from "../forms/EditUserManagementForm";

import { modalActions } from "../../store/modalStateSlice";
import { useDispatch } from "react-redux";

function createData(id, userName, fullName, contactInfo, role, manage) {
  return { id, userName, fullName, contactInfo, role, manage };
}

// List of Users objects

export default function UserManagement() {
  const dispatch = useDispatch();

  const [rowToBeEditedID, setRowToBeEdited] = useState("");

  const onDeleteClickHandler = (id) => {
    console.log("delete", id);
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };
  const onEditClickHandler = (id) => {
    console.log("edit", id);
    dispatch(modalActions.open());
    setRowToBeEdited((prevData) => id);
  };

  const defaultRows = [
    createData(
      62642,
      "username1",
      "full name1",
      "contactInfo1",
      "role1",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={62642}
      />
    ),
    createData(
      26246,
      "username2",
      "full name2",
      "contactInfo2",
      "role2",
      <EditDeleteButtons
        id={26246}
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
      />
    ),
    createData(
      42323,
      "username3",
      "full name3",
      "contactInfo3",
      "role3",
      <EditDeleteButtons
        id={42323}
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
      />
    ),
    createData(
      91234,
      "username4",
      "full name4",
      "contactInfo4",
      "role4",
      <EditDeleteButtons
        id={91234}
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
      />
    ),
    createData(
      53411,
      "username5",
      "full name5",
      "contactInfo5",
      "role5",
      <EditDeleteButtons
        id={53411}
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
      />
    ),
  ];

  const [rows, setRowData] = useState(defaultRows);

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
    console.log(searchText);

    setSearchResults((prevData) =>
      prevData.filter((row) => {
        return row.userName.includes(searchText);
      })
    );
  };

  /// setRowData((prevData) => prevData.filter((row) => row.id !== id));
  const finishUpdate = (formData) => {
    // console.log("this formData", formData);
    searchResult.forEach((row) => {
      if (row.id === rowToBeEditedID) {
        const updateEntry = { ...formData, id: row.id, manage: row.manage };
        console.log(updateEntry);
      }
    });
  };

  return (
    <>
      <EditUserManagementForm getValues={finishUpdate} />
      {/* search bar */}
      <TextField
        style={{ float: "right", margin: "5px" }}
        size="small"
        id="outlined-basic"
        label="Search Username"
        variant="outlined"
        aria-label="Search Username"
        title="Search using Username"
        onChange={onSearchHandler}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="left">Username</StyledTableCell>
              <StyledTableCell align="left">Full Name</StyledTableCell>
              <StyledTableCell align="left">Contact Info</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Manage</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResult.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.userName}</StyledTableCell>
                <StyledTableCell align="left">{row.fullName}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.contactInfo}
                </StyledTableCell>
                <StyledTableCell align="left">{row.role}</StyledTableCell>
                <StyledTableCell align="left">{row.manage}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
