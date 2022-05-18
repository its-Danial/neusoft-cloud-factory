import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// All Customer Content
import CustomerOrderManagement from "./customer/CustomerOrderManagement";

import { AppBar, Drawer } from "./ui/StylesAppBar";
import CustomerDrawerIcons from "../components/customer/CustomerDrawerIcons";

import Copyright from "./ui/Copyright";

import { Redirect } from "react-router-dom";

import UserAvatar from "./ui/UserAvatar";
import PageNumber from "./ui/PageNumber";

const mdTheme = createTheme();

function DashboardContent(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onLogOutClickHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn && <Redirect to="/sign-in" />}
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                {/* This name will change depending on the account type */}
                Order Management
              </Typography>
              <UserAvatar name="Customer" letter="C" />

              {/* LogOut Button */}
              <Button
                variant="contained"
                color="primary"
                endIcon={<ExitToAppIcon />}
                onClick={onLogOutClickHandler}
              >
                Log Out
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {/* The main ICON, this will change depending on the user type */}
              <CustomerDrawerIcons />
            </List>
          </Drawer>

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />

            {/* BODY / CONTENT START HERE */}
            <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
              {/* Dashboard content */}

              <CustomerOrderManagement />
              <PageNumber />
            </Container>
            <Copyright sx={{ pt: 4 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
