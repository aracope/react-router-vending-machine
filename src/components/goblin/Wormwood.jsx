/**
 *
 * A bitter, enchanted chewing tobacco favored by swamp goblins.
 */

import React from "react";
import { Link } from "react-router-dom";
//import wormwoodImg from "../assets/goblin/wormwood.png";

export default function Wormwood() {
  return (
    <main className="page goblin-theme">
      <h1>Wormwood Chewing Tobacco</h1>
      {/* <img src={wormwoodImg} alt="Wormwood Chewing Tobacco" className="snack-img" /> */}
      <p>Bitter enough to make your tongue curse you.</p>
      <Link to="/goblin">Back to Goblin Machine</Link>
    </main>
  );
}
