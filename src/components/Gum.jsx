import React from "react";
import { Link } from "react-router-dom";
import gumImg from '../assets/gum.jpg';

export default function Gum() {
  return (
    <main className="page">
      <h1>Gum</h1>
      <img className="snack-img" src={gumImg} alt="cartoonish drawing of a pack of gum" />
      <p>Chewy and sweet!</p>
      <Link to="/">Back to Vending Machine</Link>
    </main>
  );
}
