/**
 * 
 *
 * One of the snack detail pages. Each snack page includes
 * a link back to the main vending machine.
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Chips() {
  return (
    <main className="page">
      <h1>Chips</h1>
      <p>Crunchy, salty goodness!</p>

      {/* Simple way to go back */}
      <Link to="/">Back to Vending Machine</Link>
    </main>
  );
}
