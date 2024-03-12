import React from "react";
import { About, Demo, Home, References, Team } from "../sections";

const Page = () => {
    return (
        <div className="flex flex-col w-full h-full snap-mandatory snap-y">
            <Home />
            <Demo />
            <About />
            <References />
            <Team />
        </div>
    )
};

export default Page;