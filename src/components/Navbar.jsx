import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar bg-base-100 fixed top-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">GreenSeg</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="#home">Home</Link></li>
                    <li><Link to="#demo">Demo</Link></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#references">References</Link></li>
                    <li><Link to="#team">Team</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;