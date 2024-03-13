import React from "react";
import { easeInOut, motion } from "framer-motion";

function About() {
    return (
        <section id="about" className="hero min-h-screen bg-base-100 snap-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    src='/students/image.png'
                    className="max-w-2xl rounded-lg shadow-2xl"
                    initial={{ opacity: 0, x: "10px" }}
                    whileInView={{ opacity: 1, x: "0px" }}
                    transition={{ ease: easeInOut, duration: 0.8 }}
                />
                <div className="flex flex-col gap-y-5">
                    <motion.h1
                        className="prose font-bold text-5xl leading-normal tracking-wide"
                        initial={{ opacity: 0, y: "-9px" }}
                        whileInView={{ opacity: 1, y: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.5 }}
                    >
                        About the Project
                    </motion.h1>
                    <motion.p
                        className="prose leading-normal tracking-wide"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.8 }}
                    >
                        Making use of PyTorch, this project aims to develop a robust semantic segmentation model, capable of inference in various input conditions. For interactive use, the model is accessible via frontend, faciliated with ReactJS.
                    </motion.p>
                    {/* Additional Points */}
                    <motion.ul
                        className="leading-normal tracking-wide list-disc list-outside"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.8 }}
                    >
                        <li className="prose mb-1"><span className="underline font-bold">Goal:</span> Develop a DeepLabV3+ model with a ResNet50 Backbone for binary plant image segmentation.</li>
                        <li className="prose mb-1"><span className="underline font-bold">Tools:</span> PyTorch, OpenCV, FastAPI, ReactJS, Docker, V7Labs.</li>
                        <li className="prose mb-1"><span className="underline font-bold">Evaluation:</span> Intersection over Union (IoU), Pixel Accuracy, Dice Coefficient, Dice Loss.</li>
                        <li className="prose mb-1"><span className="underline font-bold">Datasets:</span> Eschikon Wheat Segmentation (EWS), Humans in the Loop (HIL), CVPPP LSC.</li>
                        <li className="prose mb-1"><span className="underline font-bold">Custom Data Collection:</span> Emphasis on camera settings and diverse lighting/soil conditions.</li>
                        <li className="prose mb-1"><span className="underline font-bold">Applications:</span> Agriculture, botany, and environmental sciences.</li>
                    </motion.ul>
                    <a href={`https://github.com/mukund-ks/DeepLabV3Plus-PyTorch`} target="_blank">
                        <motion.button
                            className="btn btn-primary leading-normal tracking-wide text-base"
                            initial={{ opacity: 0, x: "10px" }}
                            whileInView={{ opacity: 1, x: "0px" }}
                            transition={{ ease: easeInOut, duration: 0.8 }}
                        >
                            Learn More
                        </motion.button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;
