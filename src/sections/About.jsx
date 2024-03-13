import React from "react";
import { easeInOut, motion } from "framer-motion";

function About() {
    return (
        <section id="about" className="hero min-h-screen bg-base-100 snap-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    src='public/students/image.png' 
                    className="max-w-md rounded-lg shadow-2xl" 
                    initial={{ opacity: 0, x: "10px" }}
                    whileInView={{ opacity: 1, x: "0px" }}
                    transition={{ ease: easeInOut, duration: 0.8 }}
                /> 
                <div>
                    <motion.h1
                        className="prose font-bold text-5xl leading-normal tracking-wide"
                        initial={{ opacity: 0, y: "-9px" }}
                        whileInView={{ opacity: 1, y: "0px"  }}
                        transition={{ ease: easeInOut, duration: 0.5 }}
                    >
                        About the Project
                    </motion.h1>
                    <motion.p 
                        className="py-6"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px"  }}
                        transition={{ ease: easeInOut, duration: 0.8 }}
                    >
                        Embark on a journey to develop DeepLabV3+ model, revolutionizing plant segmentation. 
                        Utilizing PyTorch, we employ Dice Loss, Adam optimizer, ensuring robustness.                    
                    </motion.p>
                    {/* Additional Points */}
                    <motion.ul
                        className="py-6"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px"  }}
                        transition={{ ease: easeInOut, duration: 0.8 }}
                    >
                        <li><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Goal:</span> Develop a DeepLabV3+ model (ResNet50 backbone) for binary plant image segmentation (soil vs. plant).</li>
                        <li><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Tools:</span> PyTorch deep learning library, Dice Loss, Adam optimizer, early stopping.</li>
                        <li><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Evaluation:</span> Intersection over Union, Pixel Accuracy, Dice Coefficient.</li>
                        <li><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Datasets:</span> Eschikon Wheat Segmentation (EWS), Humans in the Loop (HIL), CVPPP Leaf Counting Challenge (diverse image sizes, annotation styles, plant types).</li>
                        <li><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Data Collection:</span> Emphasis on camera settings and diverse lighting/soil conditions.</li>
                        <li><span style={{ textDecoration: "underline", fontWeight: "bold" }}>Applications:</span> Agriculture, botany, and environmental sciences.</li>
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
