"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  typography: {
    fontFamily: `"Lexend", sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: "none",
          textTransform: "capitalize",
          fontWeight: 400,
          fontSize: "1rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "6px 12px",
        },
      },
    },
  },
});
