import React from "react";
import { Link } from "react-router-dom";
import goblinVendingMachineImg from '../assets/goblin_vending_machine.jpg';

export default function GoblinVendingMachine() {
    return (
        <main className="page">
            <h1>Goblin Vending Machine</h1>
            <img class="vending-machine" src={goblinVendingMachineImg} alt="vending machine" />
            <p>Select your snack:</p>
            <ul className="snack-list">
                <li>
                    <Link to="/goblin/FairyWings">Aggressively Relinquished Fairy Wings</Link>
                </li>
                <li>
                    <Link to="/goblin/Marmosets">Three Marmosets Candy Bar</Link>
                </li>
                <li>
                    <Link to="/goblin/PixieDust">Pixie Dust Fun Dip</Link>
                </li>
                <li>
                    <Link to="/goblin/Spite">Bottled Spite</Link>
                </li>
                <li>
                    <Link to="/goblin/Toadstool">Toadstool Lollipop</Link>
                </li>
                <li>
                    <Link to="/goblin/TrollSnot">Dangerously Gathered Troll Snot</Link>
                </li>
                <li>
                    <Link to="/goblin/Wormwood">Wormwood Chewing Tobacco</Link>
                </li>
            </ul>
        </main>
    );
}