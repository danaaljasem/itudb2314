import React from "react";
import {Link} from "react-router-dom";
import '../css/Header.css';

export default function Header() {
    return (
    <header>
        <ul>
            <li><Link className="menu_item" to="/tournaments">Tournaments</Link></li>
            <li><Link className="menu_item" to="/squads">Squads</Link></li>
        </ul>
    </header>
    );
}