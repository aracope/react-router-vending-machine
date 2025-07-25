/**
 * 
 *
 * Basic 404 page for unknown routes.
 */

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page">
      <h1>404 - Not Found</h1>
      <p>Whoops, that snack (or page) doesn't exist.</p>
      <Link to="/">Back to Vending Machine</Link>
    </main>
  );
}
