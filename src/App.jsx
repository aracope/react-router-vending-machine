/**
 *
 * Top-level app component that defines the main routing table.
 * We keep "pages" (like VendingMachine and snacks) in /components for simplicity.
 */

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import VendingMachine from "./components/VendingMachine.jsx";
import Chips from "./components/Chips.jsx";
import Soda from "./components/Soda.jsx";
import Gum from "./components/Gum.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  return (
    <div className="app">
      {/* 
        A tiny global nav so you can hop around quickly.
        NavLink lets us style an "active" state if wanted.
      */}
      <nav className="nav">
        <NavLink to="/" end>
          Vending Machine
        </NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/soda">Soda</NavLink>
        <NavLink to="/gum">Gum</NavLink>
      </nav>

      {/* 
        Routes table:
        - "/" -> VendingMachine
        - "/chips", "/soda", "/gum" -> respective snack pages
        - "*" -> NotFound (fallback for unknown URLs)
      */}
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/gum" element={<Gum />} />

        {/* Wildcard route for 404s */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
