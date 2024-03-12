import React from "react";
import { About, Demo, Home, References, Team } from "../sections";

const Page = () => {
    return (
        <div className="flex flex-col w-full h-full snap-mandatory snap-y">
            <section id="home" className="snap-center">
                <Home />
            </section>
            <section id="demo" className="snap-center">
                <Demo />
            </section>
            <section id="about" className="snap-center">
                <About />
            </section>
            <section id="references" className="snap-center">
                <References />
            </section>
            <section id="team" className="snap-center">
                <Team />
            </section>
        </div>
    )
};

export default Page;