import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/ui/Copyright";

import CloudIcon from "@mui/icons-material/Cloud";
import { CardActionArea } from "@mui/material";
import { useHistory } from "react-router-dom";
import Background from "../assets/background.jpg";

const cards = [
  "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=White&graphicType=Bat&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Light",
  "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Prescription01&hatColor=Black&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=Red&eyeType=Squint&eyebrowType=Default&mouthType=Concerned&skinColor=Yellow",
  "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Light",
];

const theme = createTheme();

export default function LandingPage() {
  let history = useHistory();

  const redirectSignIn = () => {
    history.push("/sign-in");
  };
  const redirectSignUp = () => {
    history.push("/sign-up");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CloudIcon sx={{ mr: 2 }} />
          <Typography
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
            }}
            variant="h6"
            color="inherit"
            noWrap
          >
            Neusoft
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            // bgcolor: "background.paper",
            backgroundImage: `url(${Background})`,
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 200,
                fontFamily: "'Ubuntu', sans-serif",
                color: "#353433",
              }}
            >
              Neusoft Cloud Factory
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                title="Create a new user account"
                aria-label="Sign Up"
                size="large"
                onClick={redirectSignUp}
                variant="contained"
              >
                Sign Up
              </Button>
              <Button
                title="Login as existing user"
                aria-label="Sign In"
                size="large"
                onClick={redirectSignIn}
                variant="outlined"
              >
                Log In
              </Button>
            </Stack>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            pt: 8,
            pb: 6,
            borderRadius: "16px",
          }}
        >
          <Typography
            sx={{
              letterSpacing: 3,
              fontFamily: "'Ubuntu', sans-serif",
              color: "#353433",
            }}
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
          >
            Testimonials
          </Typography>
          <Container sx={{ py: 4 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image={card}
                        alt="Avatar Image"
                      />
                      <CardContent>
                        <Typography variant="h5" component="div">
                          Lorem Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Testimonial Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Copyright />
      </main>
    </ThemeProvider>
  );
}
