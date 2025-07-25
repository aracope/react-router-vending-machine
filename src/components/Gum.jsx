import React from "react";
import { Link } from "react-router-dom";

export default function Gum() {
  return (
    <main className="page">
      <h1>Gum</h1>
      <p>Chewy and sweet!</p>
      <Link to="/">Back to Vending Machine</Link>
    </main>
  );
}
