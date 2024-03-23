import React, { useState } from "react";
import axios from "axios";
import { easeInOut, motion } from "framer-motion";

function Demo() {
    const [file, setFile] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const [maskUrl, setMaskUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        setIsLoading(true);

        reader.onload = async () => {
            setImgUrl(reader.result);
            const base64String = reader.result.split(',')[1];
            try {
                const res = await axios.post(
                    `${import.meta.env.VITE_API_URL}/segment`,
                    {
                        img_base64: base64String,
                    },
                    {
                        headers: { "Content-Type": "application/json" }
                    },
                );
                console.log(res.data.mask);
                setMaskUrl(`data:image/png;base64,${res.data.mask}`);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        reader.onerror = (err) => {
            console.error("Error reading the file: ", err);
        };
    };

    return (
        <section id="demo" className="hero min-h-screen bg-base-100 snap-center">
            <div className="hero-content text-neutral-content w-full h-full">
                <motion.div className="flex flex-col text-center justify-center items-center gap-y-6" layout={true}>
                    <motion.h1
                        className="text-5xl font-bold prose leading-normal tracking-wide"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.5 }}
                    >
                        Model Showcase: Plant Segmentation
                    </motion.h1>
                    <motion.div
                        className="divider"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 0.4 }}
                    >
                        <p className="prose leading-normal tracking-wide font-medium">Visualize Segmentation Results</p>
                    </motion.div>
                    <motion.div
                        className="flex w-full gap-x-6 justify-center"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.5 }}
                    >
                        <motion.input
                            type="file"
                            onChange={handleFileChange}
                            className="file-input file-input-bordered file-input-primary w-full max-w-xs leading-normal tracking-wide"
                            initial={{ opacity: 0, x: "-10px" }}
                            whileInView={{ opacity: 1, x: "0px" }}
                            transition={{ ease: easeInOut, duration: 0.8 }}
                        />
                        <motion.button
                            className="btn btn-primary leading-normal tracking-wide text-base"
                            onClick={handleUpload}
                            initial={{ opacity: 0, x: "10px" }}
                            whileInView={{ opacity: 1, x: "0px" }}
                            transition={{ ease: easeInOut, duration: 0.8 }}
                        >
                            Run Model
                        </motion.button>
                    </motion.div>
                    <div className="flex w-full gap-x-2">
                        <div className="grid h-auto flex-grow card bg-base-100 rounded-box place-items-center">
                            {imgUrl && (
                                <motion.div
                                    className="indicator shadow-lg"
                                    initial={{ opacity: 0, x: "-10px" }}
                                    whileInView={{ opacity: 1, x: "0px" }}
                                    transition={{ ease: easeInOut, duration: 0.5 }}
                                >
                                    <span className="indicator-item indicator-bottom indicator-center badge badge-primary leading-normal tracking-wide">Input Image</span>
                                    <img className="rounded-lg" src={imgUrl} alt="Input Image" />
                                </motion.div>
                            )}
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: easeInOut, duration: 0.4 }}
                            className="divider divider-horizontal"
                        />
                        <div className="grid h-auto flex-grow card bg-base-100 rounded-box place-items-center">
                            {imgUrl && (isLoading ? (
                                <span className="loading loading-ball loading-lg"></span>
                            ) : (
                                <motion.div
                                    className="indicator shadow-lg"
                                    initial={{ opacity: 0, x: "10px" }}
                                    whileInView={{ opacity: 1, x: "0px" }}
                                    transition={{ ease: easeInOut, duration: 0.5 }}
                                >
                                    <span className="indicator-item indicator-bottom indicator-center badge badge-primary leading-normal tracking-wide">Segmenation Mask</span>
                                    <img className="rounded-lg" src={maskUrl} alt="Segmentation Mask" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Demo;