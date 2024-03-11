import React from "react";
import { About, Demo, Home, References, Team } from "../sections";

const Page = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <section id="home">
                <Home />
            </section>
            <section id="demo">
                <Demo />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="references">
                <References />
            </section>
            <section id="team">
                <Team />
            </section>
        </div>
    )
};

export default Page;