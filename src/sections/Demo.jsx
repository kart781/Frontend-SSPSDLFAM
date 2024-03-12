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
                    'http://localhost:8000/segment',
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
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-neutral-content w-full h-full">
                <div className="flex flex-col text-center justify-center items-center gap-y-6">
                    <motion.h1
                        className="mb-5 text-5xl font-bold"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.5 }}
                    >
                        Explore the Model
                    </motion.h1>
                    <motion.div
                        className="flex w-full gap-x-6 justify-center"
                        initial={{ opacity: 0, y: "10px" }}
                        whileInView={{ opacity: 1, y: "0px" }}
                        transition={{ ease: easeInOut, duration: 0.5 }}
                        layout
                    >
                        <motion.input
                            type="file"
                            onChange={handleFileChange}
                            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                            initial={{ opacity: 0, x: "-10px" }}
                            whileInView={{ opacity: 1, x: "0px" }}
                            transition={{ ease: easeInOut, duration: 0.8 }}
                        />
                        <motion.button
                            className="btn btn-primary"
                            onClick={handleUpload}
                            initial={{ opacity: 0, x: "10px" }}
                            whileInView={{ opacity: 1, x: "0px" }}
                            transition={{ ease: easeInOut, duration: 0.8 }}
                        >
                            Run Model
                        </motion.button>
                    </motion.div>
                    <motion.div className="flex w-full gap-x-2" layout>
                        <div className="grid h-auto flex-grow card bg-base-100 rounded-box place-items-center">
                            {imgUrl && (
                                <motion.div
                                    className="indicator shadow-lg"
                                    initial={{ opacity: 0, x: "-10px" }}
                                    whileInView={{ opacity: 1, x: "0px" }}
                                    transition={{ ease: easeInOut, duration: 0.5 }}
                                >
                                    <span className="indicator-item indicator-bottom indicator-center badge badge-primary">Input Image</span>
                                    <img className="rounded-lg" src={imgUrl} alt="Input Image" />
                                </motion.div>
                            )}
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: easeInOut, duration: 0.9 }}
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
                                    <span className="indicator-item indicator-bottom indicator-center badge badge-primary">Segmenation Mask</span>
                                    <img className="rounded-lg" src={maskUrl} alt="Segmentation Mask" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Demo;