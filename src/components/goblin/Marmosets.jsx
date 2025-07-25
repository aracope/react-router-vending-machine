/**
 *
 * A candy bar with questionable origins (may contain marmoset).
 */

import React from "react";
import { Link } from "react-router-dom";
//import marmosetsImg from "../assets/goblin/marmosets.png";

export default function Marmosets() {
  return (
    <main className="page goblin-theme">
      <h1>Three Marmosets Candy Bar</h1>
      {/* <img src={marmosetsImg} alt="Three Marmosets Candy Bar" className="snack-img" /> */}
      <p>Chewy, crunchy, and under constant legal dispute.</p>
      <Link to="/goblin">Back to Goblin Machine</Link>
    </main>
  );
}
