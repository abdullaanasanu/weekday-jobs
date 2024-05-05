// imports
import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

// UI imports
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Navbar from "@/components/navbar";

import "./globals.css";
import { theme } from "@/common/theme";

// App imports
import { Providers } from "@/store/provider";

// Metadata
export const metadata: Metadata = {
  title: "Weekday",
  description: "A platform finding your right job",
};

// Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Navbar />
              <Container maxWidth="xl">{children}</Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
