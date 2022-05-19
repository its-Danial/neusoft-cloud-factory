import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Copyright from "../components/ui/Copyright";

import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = createTheme();

function SignInSide(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountType, setAccountType] = useState(null);
  const [isError, setIsError] = useState(null);
  //list of users Not single user
  const users = useSelector((state) => state.userAccountState.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userLogInData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    //checked loginInfo with redux list of users

    users.forEach((user) => {
      if (
        user.email === userLogInData.email &&
        user.password === userLogInData.password
      ) {
        setIsLoggedIn(true);
        setIsError(null);
        setAccountType(user.role);
      } else {
        setIsError("error");
      }
    });
  };

  return (
    <>
      {isLoggedIn && accountType === "administrator" && (
        <Redirect to="/dashboard/admin/summary" />
      )}
      {isLoggedIn && accountType === "manager" && (
        <Redirect to="/dashboard/manufacturer/my-factory" />
      )}
      {isLoggedIn && accountType === "customer" && (
        <Redirect to="/dashboard/customer/order-management" />
      )}
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundImage:
                "url(https://www.neusoft.com/assets/img/facebook-og.png)",

              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                {isError ? (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error
                  />
                ) : (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                )}
                {isError ? (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error
                    helperText="Incorrect Password or Email"
                  />
                ) : (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                )}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/sign-up">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link to="/sign-up">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default SignInSide;
