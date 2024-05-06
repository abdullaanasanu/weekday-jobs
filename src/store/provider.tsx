"use client";

// Imports
import { Provider } from "react-redux";

// App imports
import store from "./index";

// Component
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
