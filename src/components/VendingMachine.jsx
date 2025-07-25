/**
 * 
 *
 * The "home" page of the app. Lists snacks you can click.
 * Clicking a snack navigates to its dedicated route.
 */

import React from "react";
import { Link } from "react-router-dom";

export default function VendingMachine() {
  return (
    <main className="page">
      <h1>Vending Machine</h1>
      <p>Select your snack:</p>

      <ul className="snack-list">
        {/* 
          Link updates the URL without a full page reload.
          It works because we are inside a BrowserRouter.
        */}
        <li>
          <Link to="/chips">Chips</Link>
        </li>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/gum">Gum</Link>
        </li>
      </ul>
    </main>
  );
}
