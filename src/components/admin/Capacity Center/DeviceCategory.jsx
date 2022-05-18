import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditDeleteButtons from "../../helper/EditDeleteButtons";
import { StyledTableCell, StyledTableRow } from "../../ui/StyledTable";

import SearchAndAddBar from "../../ui/SearchAndAddBar";

import CategoryForm from "../../forms/CategoryForm";
import generateRandomID from "../../helper/generateRandomID";
import { modalActions } from "../../../store/modalStateSlice";
import { useDispatch } from "react-redux";

function createData(id, classification, edit) {
  return { id, classification, edit };
}

// List of Users objects

const DeviceCategory = () => {
  const [editingID, setEditingID] = useState("");
  const dispatch = useDispatch();
  const onDeleteClickHandler = (id) => {
    console.log("delete", id);
    // const newData = rows.filter((row) => row.id !== id);
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };
  const onEditClickHandler = (id) => {
    console.log("edit", id);
    console.log("edit", id);
    dispatch(modalActions.open());
    setEditingID(id);
  };

  const defaultRows = [
    createData(
      71341,
      "classification1",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={71341}
      />
    ),
    createData(
      31313,
      "classification2",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={31313}
      />
    ),
    createData(
      55241,
      "classification3",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={55241}
      />
    ),
  ];

  const [rows, setRowData] = useState(defaultRows);

  //Function for searching
  const [searchResult, setSearchResults] = useState(rows);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchResults((prevData) => rows);
  }, [rows]);

  useEffect(() => {
    if (searchText.trim().length < 1) {
      setSearchResults(rows);
    }
  }, [searchText, rows]);

  const onSearchHandler = (enteredText) => {
    setSearchText(enteredText);

    setSearchResults((prevData) =>
      prevData.filter((row) => {
        return row.classification.includes(searchText);
      })
    );
  };

  const createInputtedData = (classification) => {
    //for adding new values to the table
    const randomId = generateRandomID();
    setRowData((prevData) => [
      ...prevData,
      createData(
        randomId,
        classification,
        <EditDeleteButtons
          onDelete={onDeleteClickHandler}
          onEdit={onEditClickHandler}
          id={randomId}
        />
      ),
    ]);
  };

  return (
    <>
      <CategoryForm
        getValue={createInputtedData}
        title="Device Category Form"
      />

      <SearchAndAddBar onEnterText={onSearchHandler} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Classification</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResult.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.classification}
                </StyledTableCell>
                <StyledTableCell align="left">{row.edit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DeviceCategory;
