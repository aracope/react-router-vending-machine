/**
 *
 * Top-level app component that defines the main routing table.
 * We keep "pages" (like VendingMachine and snacks) in /components for simplicity.
 */

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import VendingMachine from "./components/VendingMachine.jsx";
import GoblinVendingMachine from "./components/GoblinVendingMachine.jsx";
import Chips from "./components/Chips.jsx";
import Soda from "./components/Soda.jsx";
import Gum from "./components/Gum.jsx";
import NotFound from "./components/NotFound.jsx";

// Goblin options
import FairyWings from "./components/goblin/FairyWings.jsx";
import TrollSnot from "./components/goblin/TrollSnot.jsx";
import Wormwood from "./components/goblin/Wormwood.jsx";
import Marmosets from "./components/goblin/Marmosets.jsx";
import PixieDust from "./components/goblin/PixieDust.jsx";
import Spite from "./components/goblin/Spite.jsx";
import Toadstool from "./components/goblin/Toadstool.jsx";

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
        <NavLink to="/goblin">Goblin Machine</NavLink>
      </nav>

      {/* 
        Routes table:
        - "/" -> VendingMachine
        - "/chips", "/soda", "/gum" -> respective snack pages
        - "*" -> NotFound (fallback for unknown URLs)
      */}
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/goblin" element={<GoblinVendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/gum" element={<Gum />} />

        {/* Goblin Routes */}
        <Route path="/goblin/FairyWings" element={<FairyWings />} />
        <Route path="/goblin/TrollSnot" element={<TrollSnot />} />
        <Route path="/goblin/Wormwood" element={<Wormwood />} />
        <Route path="/goblin/Marmosets" element={<Marmosets />} />
        <Route path="/goblin/Spite" element={<Spite />} />
        <Route path="/goblin/Toadstool" element={<Toadstool />} />
        <Route path="/goblin/PixieDust" element={<PixieDust />} />

        {/* Wildcard route for 404s */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
