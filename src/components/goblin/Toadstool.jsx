/**
 *
 * Sweet, slightly poisonous mushroom lollipop.
 */

import React from "react";
import { Link } from "react-router-dom";
//import toadstoolImg from "../assets/goblin/toadstool.png";

export default function Toadstool() {
  return (
    <main className="page goblin-theme">
      <h1>Toadstool Lollipop</h1>
      {/* <img src={toadstoolImg} alt="Toadstool Lollipop" className="snack-img" /> */}
      <p>Warning: May cause spontaneous croaking.</p>
      <Link to="/goblin">Back to Goblin Machine</Link>
    </main>
  );
}
