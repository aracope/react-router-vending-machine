/**
 * 
 * A magical snack made from questionable fairy sparkles.
 */

import React from "react";
import { Link } from "react-router-dom";
//import pixieDustImg from "../assets/goblin/pixie-dust.png"; // placeholder image path

export default function PixieDust() {
  return (
    <main className="page goblin-theme">
      <h1>Pixie Dust Fun Dip</h1>
      {/* <img src={pixieDustImg} alt="Pixie Dust Fun Dip" className="snack-img" /> */}
      <p>Sweet, sparkly, and probably stolen from a fairy's purse.</p>
      <Link to="/goblin">Back to Goblin Machine</Link>
    </main>
  );
}
