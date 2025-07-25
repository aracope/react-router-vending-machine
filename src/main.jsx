/**
 *
 * App entry point. Bootstraps React and renders <App />.
 * We keep this very thin so all app logic/routes live in App.jsx.
 */

import React from "react";
import ReactDOM from "react-dom/client";
// Provides routing context to the app
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.jsx";
import "./styles.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter listens to URL changes and lets us define Routes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
