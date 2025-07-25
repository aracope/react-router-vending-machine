import React from "react";
import { Link } from "react-router-dom";
import sodaImg from '../assets/soda.jpg';

export default function Soda() {
  return (
    <main className="page">
      <h1>Soda</h1>
      <img class="snack" src={sodaImg} alt="bubbles from carbonation" />
      <p>Fizz fizz ahhh!</p>
      <Link to="/">Back to Vending Machine</Link>
    </main>
  );
}
