/**
 *
 * Bottled pure malice, sustainably sourced from housecats.
 */

import React from "react";
import { Link } from "react-router-dom";
//import spiteImg from "../assets/spite.png";

export default function Spite() {
  return (
    <main className="page goblin-theme">
      <h1>Bottled Spite</h1>
      {/* <img src={spiteImg} alt="Bottled Spite" className="snack-img" /> */}
      <p>100% ethically harvested from the dark glares of housecats.</p>
      <Link to="/goblin">Back to Goblin Machine</Link>
    </main>
  );
}
