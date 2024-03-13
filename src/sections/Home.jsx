import React from "react";
import { easeInOut, motion } from "framer-motion";
import { images } from "./constants";

function Home() {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    return (
        <section id="home" className="hero min-h-screen bg-base-100 snap-center overflow-hidden">
            <div className="hero-content text-neutral-content w-full h-full">
                <motion.div className="flex flex-row justify-around items-center w-full h-full gap-x-10" layout>
                    <motion.div
                        className="diff aspect-square max-w-md rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: "-12px" }}
                        whileInView={{ opacity: 1, x: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="diff-item-1">
                            <img alt="plant image" src="/plants/plant_img.png" />
                        </div>
                        <div className="diff-item-2">
                            <img alt="plant image" src="/plants/plant_res.png" />
                        </div>
                        <div className="diff-resizer"></div>
                    </motion.div>
                    <div
                        className="text-center"
                    >
                        <motion.h1
                            className="prose font-bold text-5xl leading-normal tracking-wide"
                            initial={{ opacity: 0, y: "-9px" }}
                            whileInView={{ opacity: 1, y: "0px" }}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                            GreenSeg
                        </motion.h1>
                        <motion.div
                            className="divider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: easeInOut, duration: 0.4 }}
                        />
                        <motion.p
                            className="prose font-normal text-xl leading-normal tracking-wide text-nowrap"
                            initial={{ opacity: 0, y: "9px" }}
                            whileInView={{ opacity: 1, y: "0px" }}
                            transition={{ ease: easeInOut, duration: 0.5 }}
                        >
                            Tackling Precise Plant Image Segmentation
                        </motion.p>
                    </div>
                    <div className="rounded-2xl max-w-sm ">
                        <div className="mx-10 grid grid-cols-4 grid-rows-3 gap-2 ">
                            {images.map((imageUrl, index) => (
                                <motion.div
                                    key={index}
                                    className={`col-span-${getRandomInt(1, 2)} row-span-${getRandomInt(1, 2)} shadow-lg`}
                                    initial={{ opacity: 0, x: "10px" }}
                                    whileInView={{ opacity: 1, x: "0px" }}
                                    transition={{ ease: easeInOut, duration: getRandomFloat(0, 1.5) }}
                                >
                                    <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Home;