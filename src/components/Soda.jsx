import React from "react";
import { Link } from "react-router-dom";

export default function Soda() {
  return (
    <main className="page">
      <h1>Soda</h1>
      <p>Fizz fizz ahhh!</p>
      <Link to="/">Back to Vending Machine</Link>
    </main>
  );
}
