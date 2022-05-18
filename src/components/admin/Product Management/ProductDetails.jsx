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

import DetailsForm from "../../forms/DetailsForm";
import generateRandomID from "../../helper/generateRandomID";
import { modalActions } from "../../../store/modalStateSlice";
import { useDispatch } from "react-redux";

function createData(
  id,
  productNum,
  name,
  category,
  specification,
  description,
  edit
) {
  return { id, productNum, name, category, specification, description, edit };
}

const ProductDetails = () => {
  const [editingID, setEditingID] = useState("");
  const dispatch = useDispatch();
  const onDeleteClickHandler = (id) => {
    console.log("delete", id);
    // const newData = rows.filter((row) => row.id !== id);
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };
  const onEditClickHandler = (id) => {
    console.log("edit", id);
    dispatch(modalActions.open());
    setEditingID(id);
  };
  // List of Product objects
  const defaultRows = [
    createData(
      99123,
      "Product Number 1",
      "Name 1",
      "Category 1",
      "Specification 1",
      "Description 1",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={99123}
      />
    ),
    createData(
      51432,
      "Product Number 2",
      "Name 2",
      "Category 2",
      "Specification 2",
      "Description 2",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={51432}
      />
    ),
    createData(
      37715,
      "Product Number 3",
      "Name 3",
      "Category 3",
      "Specification 3",
      "Description 3",
      <EditDeleteButtons
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={37715}
      />
    ),
  ];

  const [rows, setRowData] = useState(defaultRows);

  const createInputtedData = (formData) => {
    //for adding new values to the table
    console.log(formData);
    const randomId = generateRandomID();
    setRowData((prevData) => [
      ...prevData,
      createData(
        randomId,
        `Product Number ${randomId}`,
        formData.name,
        formData.category,
        formData.specification,
        formData.description,
        <EditDeleteButtons
          onDelete={onDeleteClickHandler}
          onEdit={onEditClickHandler}
          id={randomId}
        />
      ),
    ]);
  };

  //Function for searching
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

  const onSearchHandler = (enteredText) => {
    setSearchText(enteredText);

    setSearchResults((prevData) =>
      prevData.filter((row) => {
        return row.name.includes(searchText);
      })
    );
  };

  return (
    <>
      <DetailsForm getValues={createInputtedData} title="Product" />
      <SearchAndAddBar onEnterText={onSearchHandler} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Product Number</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="left">Specification</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResult.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.productNum}</StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.category}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.specification}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.description}
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

export default ProductDetails;
