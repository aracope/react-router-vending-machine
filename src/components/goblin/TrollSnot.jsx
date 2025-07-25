/**
 * 
 *
 * Snack: Dangerously Gathered Troll Snot
 * Collected at great personal risk.
 */

import React from "react";
import { Link } from "react-router-dom";
//import trollSnotImg from "../assets/goblin/troll-snot.png";

export default function TrollSnot() {
  return (
    <main className="page goblin-theme">
      <h1>Dangerously Gathered Troll Snot</h1>
      {/* <img
        src={trollSnotImg}
        alt="Dangerously Gathered Troll Snot"
        className="snack-img"
      /> */}
      <p>
        Freshly harvested from an angry troll's nose - chewy and slightly acidic.
        Best served chilled.
      </p>
      <Link to="/goblin">Back to Goblin Machine</Link>
    </main>
  );
}
