import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import AppProvider from "./context/Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
);
