import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Copyright from "../components/ui/Copyright";
import { Link } from "react-router-dom";

const theme = createTheme();

function SignUp() {
  const [accountType, setAccountType] = useState("CloudFactory");

  //submit handler function
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log(event.target.value);
    console.log({
      userName: data.get("userName"),
      password: data.get("password"),
      fullName: data.get("fullName"),
      contactInfo: data.get("contactInfo"),
      factoryName: data.get("factoryName"),
      factoryInfo: data.get("factoryInfo"),
    });
  };

  const handleChecked = (event) => {
    event.preventDefault();
    setAccountType(event.target.value);
    console.log(accountType);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {/* User Name */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="user-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              {/* password */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* full name */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="full-name"
                />
              </Grid>
              {/* contact info  */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactInfo"
                  label="Contact Information"
                  name="contactInfo"
                  autoComplete="contact-information"
                />
              </Grid>
              {/* user type */}
              <Grid item xs={12}>
                <FormLabel>Account Type</FormLabel>

                <RadioGroup row name="row-radio-buttons-group">
                  <FormControlLabel
                    value="cloudFactory"
                    control={<Radio onChange={handleChecked} />}
                    label="Cloud Factory"
                  />
                  <FormControlLabel
                    value="retailer"
                    control={<Radio onChange={handleChecked} />}
                    label="Retailer "
                  />
                </RadioGroup>
              </Grid>
              {accountType === "cloudFactory" && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="factoryName"
                      label="Factory Name"
                      name="factoryName"
                      autoComplete="Factory Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="factoryInfo"
                      label="Cloud Factory Information"
                      name="factoryInfo"
                      autoComplete="Cloud Factory Information"
                    />
                  </Grid>
                </>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-in">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
