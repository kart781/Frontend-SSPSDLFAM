import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar bg-base-100 fixed top-0 z-50">
            <div className="flex-1">
                <li className="btn btn-ghost text-xl leading-normal tracking-wide font-semibold"><Link to="#home">GreenSeg</Link></li>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-1">
                    <li className="leading-normal tracking-wide font-semibold text-base"><Link to="#demo">Demo</Link></li>
                    <li className="leading-normal tracking-wide font-semibold text-base"><Link to="#about">About</Link></li>
                    <li className="leading-normal tracking-wide font-semibold text-base"><Link to="#timeline">Timeline</Link></li>
                    <li className="leading-normal tracking-wide font-semibold text-base"><Link to="#references">References</Link></li>
                    <li className="leading-normal tracking-wide font-semibold text-base"><Link to="#team">Team</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;