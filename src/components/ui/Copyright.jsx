import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      aria-label="Copyright"
      title="Copyrights"
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ mb: 3 }}
    >
      {"Copyright © "}
      NEU ❤️ {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
