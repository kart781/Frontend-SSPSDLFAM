import React from "react";
import { refs } from "./constants";
import { easeInOut, motion } from "framer-motion";
// import "./ReferenceStyles.css";

function Reference() {
    return (
        <section id="references" className="hero min-h-screen bg-base-100 snap-center">
            <motion.div className="hero-content text-neutral-content" layout>
                <motion.div
                    className="columns-4 gap-x-6 p-1 overflow-hidden"
                    initial={{ opacity: 0, x: "20px" }}
                    whileInView={{ opacity: 1, x: "0px" }}
                    transition={{ ease: easeInOut, duration: "0.8" }}
                >
                    <ul className="list-disc list-inside">
                        {refs.map((value, index) => (
                            <a href={value.link} target="_blank">
                                <li
                                    key={index}
                                    className="leading-normal tracking-wide text-[0.825rem] font-medium my-2 prose hover:text-neutral-content transition-all duration-200"
                                >
                                    {value.text}
                                </li>
                            </a>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Reference;