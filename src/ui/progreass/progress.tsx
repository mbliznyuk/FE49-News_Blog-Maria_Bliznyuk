import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColor() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100dvh"
    >
      <CircularProgress color="secondary" />
    </Stack>
  );
}
