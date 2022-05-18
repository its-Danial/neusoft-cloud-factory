import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { StyledTableCell, StyledTableRow } from "../ui/StyledTable";

import SearchAndAddBar from "../ui/SearchAndAddBar";
import BidButton from "../helper/BidButton";

import CategoryForm from "../forms/CategoryForm";
import generateRandomID from "../helper/generateRandomID";

function createData(
  number,
  id,
  name,
  quantity,
  deliveryDate,
  bidDeadline,
  receiver,
  receiverContact,
  shippingAddress,
  status,
  edit
) {
  return {
    number,
    id,
    name,
    quantity,
    deliveryDate,
    bidDeadline,
    receiver,
    receiverContact,
    shippingAddress,
    status,
    edit,
  };
}

const OrderManagement = () => {
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
      65324,
      "XS max Case",
      "300",
      "26-06-2022",
      "20-06-2022",
      "Mitsuhide Kino",
      "+86123424526",
      "Orchid St. No.& A",
      "On Going",
      <BidButton
        text={"Bid"}
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={65324}
      />
    ),
    createData(
      2,
      84232,
      "12 pro Case",
      "200",
      "12-04-2022",
      "06-04-2022",
      "Porsley Cliff",
      "+86624646754",
      "Gardenio St No.145",
      "Completed",
      <BidButton
        text={"Bid"}
        state={{ disabled: "disabled" }}
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={84232}
      />
    ),
    createData(
      3,
      16145,
      "P50 Case",
      "400",
      "19-06-2022",
      "13-06-2022",
      "Clint Patricia",
      "+8613524633",
      "Baulevard St. No.64",
      "On Going",
      <BidButton
        text={"Bid"}
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={16145}
      />
    ),
    createData(
      4,
      57433,
      "522 Case",
      "1000",
      "15-05-2022",
      "18-05-2022",
      "Kim Sang Hyun",
      "+86452466243",
      "Narnia St. No.64",
      "Bidding Ends",
      <BidButton
        text={"Bid"}
        state={{ disabled: "disabled" }}
        onDelete={onDeleteClickHandler}
        onConfig={onConfigClickHandler}
        id={57433}
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
        <BidButton
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
              <StyledTableCell align="left">Order ID</StyledTableCell>
              <StyledTableCell align="left">Product Name</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">Delivery Date</StyledTableCell>
              <StyledTableCell align="left">Bid Deadline</StyledTableCell>
              <StyledTableCell align="left">Receiver</StyledTableCell>
              <StyledTableCell align="left">Receiver Contact</StyledTableCell>
              <StyledTableCell align="left">Shipping Address</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>

          {/* number,
    id,
    name,
    quantity,
    deliveryDate,
    bidDeadline,
    receiver,
    receiverContact,
    shippingAddress,
    status,
    edit, */}

          <TableBody>
            {searchResult.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.number}
                </StyledTableCell>
                <StyledTableCell align="left">{row.id}</StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.deliveryDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.bidDeadline}
                </StyledTableCell>
                <StyledTableCell align="left">{row.receiver}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.receiverContact}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.shippingAddress}
                </StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
                <StyledTableCell align="left">{row.edit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderManagement;
