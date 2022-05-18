import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DeviceDetailsButtons from "../../helper/DeviceDetailsButtons";
import { StyledTableCell, StyledTableRow } from "../../ui/StyledTable";

import SearchAndAddBar from "../../ui/SearchAndAddBar";

import DetailsForm from "../../forms/DetailsForm";
import generateRandomID from "../../helper/generateRandomID";

import { modalActions } from "../../../store/modalStateSlice";
import { useDispatch } from "react-redux";

function createData(
  id,
  deviceNum,
  name,
  category,
  specifications,
  descriptions,
  status,
  rentalStatus,
  ownedFactoryOperations,
  edit
) {
  return {
    id,
    deviceNum,
    name,
    category,
    specifications,
    descriptions,
    status,
    rentalStatus,
    ownedFactoryOperations,
    edit,
  };
}

export default function DeviceDetails() {
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

  const turnOnOffHandler = (id) => {
    let newRow;
    let toggledRow = [];

    setRowData((prevData) => {
      prevData.forEach((row) => {
        if (row.id === id) {
          newRow = {
            id: row.id,
            deviceNum: row.deviceNum,
            name: row.name,
            category: row.category,
            specifications: row.specifications,
            descriptions: row.descriptions,
            status: row.status === "on" ? "off" : "on",
            rentalStatus: row.rentalStatus,
            ownedFactoryOperations: row.ownedFactoryOperations,
            edit: row.edit,
          };
          toggledRow.push(newRow);
        } else {
          toggledRow.push(row);
        }
      });
      return toggledRow;
    });
  };

  // List of device objects
  const defaultRows = [
    createData(
      13523,
      "Device Number 1",
      "Device Name 1",
      "Device Category 1",
      "Device Specifications 1",
      "Device descriptions 1",
      "on",
      "Device Rental Status 1",
      "Device owned factory operations 1",
      <DeviceDetailsButtons
        onTurnOff={turnOnOffHandler}
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={13523}
      />
    ),
    createData(
      426234,
      "Device Number 2",
      "Device Name 2",
      "Device Category 2",
      "Device Specifications 2",
      "Device Descriptions 2",
      "off",
      "Device Rental Status 2",
      "Device owned factory operations 2",
      <DeviceDetailsButtons
        onTurnOff={turnOnOffHandler}
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={426234}
      />
    ),
    createData(
      34112,
      "Device Number 3",
      "Device Name 3",
      "Device Category 3",
      "Device Specifications 3",
      "Device descriptions 3",
      "off",
      "Device Rental Status 3",
      "Device owned factory operations 3",
      <DeviceDetailsButtons
        onTurnOff={turnOnOffHandler}
        onDelete={onDeleteClickHandler}
        onEdit={onEditClickHandler}
        id={34112}
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
        `Device Number ${randomId}`,
        formData.name,
        formData.category,
        formData.specification,
        formData.description,
        `off`,
        `Device Rental Status ${randomId}`,
        `Device owned factory operations ${randomId}`,
        <DeviceDetailsButtons
          onTurnOff={turnOnOffHandler}
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
      <DetailsForm getValues={createInputtedData} title="Device" />
      <SearchAndAddBar onEnterText={onSearchHandler} />
      <TableContainer component={Paper}>
        <Table size="string" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Device Number</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="left">Specifications</StyledTableCell>
              <StyledTableCell align="left">Descriptions</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Rental Status</StyledTableCell>
              <StyledTableCell align="left">Factory Operations</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResult.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.deviceNum}</StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.category}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.specifications}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.descriptions}
                </StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.rentalStatus}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.ownedFactoryOperations}
                </StyledTableCell>
                <StyledTableCell align="left">{row.edit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
