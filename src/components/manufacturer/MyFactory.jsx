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

import DetailsForm from "../forms/DetailsForm";
import generateRandomID from "../helper/generateRandomID";
import RentDeviceForm from "../forms/RentDeviceForm";
import DevicesConfigForm from "../forms/DevicesConfigForm";

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
  const [showConfigForm, setShowConfigForm] = useState(false);

  const onDeleteClickHandler = (id) => {
    console.log("delete", id);
    // const newData = rows.filter((row) => row.id !== id);
    setRowData((prevData) => prevData.filter((row) => row.id !== id));
  };
  const onConfigClickHandler = (id) => {
    console.log("edit", id);
    setShowConfigForm(true);
  };

  const turnOnOffHandler = (id) => {
    let newRow;
    let toggledRow = [];

    setRowData((prevData) => {
      prevData.forEach((row) => {
        if (row.id === id) {
          newRow = {
            number: row.number,
            id: row.id,
            name: row.name,
            category: row.category,
            specifications: row.specifications,
            status: row.status === "on" ? "off" : "on",
            deviceSource: row.deviceSource,
            factory: row.factory,
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
        onTurnOff={turnOnOffHandler}
        state={{ disabled: "disabled" }}
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={91741}
      />
    ),
    createData(
      2,
      58232,
      "Xiaomi T-213",
      "E-Lathe",
      "L300P 10 Hp 75 kW 200 v",
      "off",
      "rental",
      "Clipper",
      <OwnedFactoryButtons
        onTurnOff={turnOnOffHandler}
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
        onTurnOff={turnOnOffHandler}
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

  const createInputtedData = (formData) => {
    //for adding new values to the table

    const randomId = generateRandomID();
    setRowData((prevData) => [
      ...prevData,
      createData(
        prevData.length + 1,
        randomId,
        formData.name,
        formData.category,
        formData.specification,
        "on",
        "owned",
        "Customer1",
        <OwnedFactoryButtons
          onTurnOff={turnOnOffHandler}
          onDelete={onDeleteClickHandler}
          onConfig={onConfigClickHandler}
          id={randomId}
        />
      ),
    ]);
  };

  const [showRentDeviceForm, setShowRentDeviceForm] = useState(true);

  const showRentDeviceFormHandler = (state) => {
    setShowRentDeviceForm(state);
    setShowConfigForm(false);
  };

  const showConfigFormHandler = (state) => {
    setShowConfigForm(state);
    console.log(state);
  };

  return (
    <>
      {!showRentDeviceForm && (
        <DetailsForm getValues={createInputtedData} title="Device" />
      )}
      {showRentDeviceForm && (
        <RentDeviceForm showRentDeviceForm={showRentDeviceFormHandler} />
      )}

      {showConfigForm && (
        <DevicesConfigForm showConfigForm={showConfigFormHandler} />
      )}

      <SearchAndAddBar
        showRentDeviceForm={showRentDeviceFormHandler}
        showRent={true}
        onEnterText={onSearchHandler}
      />
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
