/**
 * 
 * Snack: Aggressively Relinquished Fairy Wings
 * May or may not still have sparkles of resentment.
 */

import React from "react";
import { Link } from "react-router-dom";
// import fairyWingsImg from "../assets/goblin/fairy-wings.png"; // placeholder path

export default function FairyWings() {
  return (
    <main className="page goblin-theme">
      <h1>Aggressively Relinquished Fairy Wings</h1>
      {/* <img
        src={fairyWingsImg}
        alt="Aggressively Relinquished Fairy Wings"
        className="snack-img"
      /> */}
      <p>
        Torn from the tantrums of woodland sprites. Lightly salted with fairy
        tears.
      </p>
      <Link to="/goblin">Back to Goblin Machine</Link>
    </main>
  );
}
