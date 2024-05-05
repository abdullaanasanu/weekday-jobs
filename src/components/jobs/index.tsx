// UI imports
import Grid from "@mui/material/Grid";
import Item from "./item";

// Component
export default function Jobs() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={4}>
        <Item />
      </Grid>
      <Grid item xs={4}>
        <Item />
      </Grid>
      <Grid item xs={4}>
        <Item />
      </Grid>
      <Grid item xs={4}>
        <Item />
      </Grid>
      <Grid item xs={4}>
        <Item />
      </Grid>
    </Grid>
  );
}
