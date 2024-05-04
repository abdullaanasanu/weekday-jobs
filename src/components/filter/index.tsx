// UI imports
import { Select } from "./select";
import Box from "@mui/material/Box";

// Component
export default function Filter() {
  return (
    <Box component="section" sx={{ display: "flex", gap: "0.5rem" }}>
      <Select options={[]} placeholder="Roles" />
      <Select options={[]} placeholder="Roles" />
    </Box>
  );
}
