"use client";

// UI imports
import Box from "@mui/material/Box";

// App imports
import Filter from "@/components/filter";
import Jobs from "@/components/jobs";

// Component
export default function Home() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", gap: "2rem", py: 4 }}
    >
      <Filter />
      <Jobs />
    </Box>
  );
}
