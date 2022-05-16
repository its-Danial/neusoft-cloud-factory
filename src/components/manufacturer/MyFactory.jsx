import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnedFactoryButtons from "../helper/OwnedFactoryButtons";
import { StyledTableCell, StyledTableRow } from "../ui/StyledTable";

import SearchAndAddBar from "../ui/SearchAndAddBar";

import CategoryForm from "../forms/CategoryForm";
import generateRandomID from "../helper/generateRandomID";

function createData(
  number,
  id,
  name,
  category,
  specifications,
  status,
  deviceSource,
  factory,
  edit
) {
  return {
    number,
    id,
    name,
    category,
    specifications,
    status,
    deviceSource,
    factory,
    edit,
  };
}

const MyFactory = () => {
  const onDeleteClickHandler = (id) => {
    console.log("delete", id);
    // const newData = rows.filter((row) => row.id !== id);
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };
  const onConfigClickHandler = (id) => {
    console.log("edit", id);
  };

  const defaultRows = [
    createData(
      1,
      91741,
      "Hitachi L-300",
      "E-Lathe",
      "L300P 10 Hp 75 kW 200 v",
      "on",
      "rental",
      "Clipper",
      <OwnedFactoryButtons
        state={{ disabled: "disabled" }}
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={91741}
      />
    ),
    createData(
      2,
      58232,
      "Hitachi L-300",
      "E-Lathe",
      "L300P 10 Hp 75 kW 200 v",
      "off",
      "rental",
      "Clipper",
      <OwnedFactoryButtons
        state={{ disabled: "disabled" }}
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={58232}
      />
    ),
    createData(
      3,
      16145,
      "Hitachi L-300",
      "E-Lathe",
      "L300P 10 Hp 75 kW 200 v",
      "on",
      "owned",
      "Harvey",
      <OwnedFactoryButtons
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={16145}
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
        return row.name.includes(searchText);
      })
    );
  };

  const createInputtedData = (input) => {
    //for adding new values to the table
    const randomId = generateRandomID();
    setRowData((prevData) => [
      ...prevData,
      createData(
        randomId,
        ...input,
        <OwnedFactoryButtons
          onDelete={onDeleteClickHandler}
          onConfig={onConfigClickHandler}
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
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="left">Device ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="left">Specifications</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Device Source</StyledTableCell>
              <StyledTableCell align="left">Factory</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResult.map((row) => (
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
                <StyledTableCell align="left">
                  {row.deviceSource}
                </StyledTableCell>
                <StyledTableCell align="left">{row.factory}</StyledTableCell>
                <StyledTableCell align="left">{row.edit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyFactory;
