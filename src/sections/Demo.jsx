import React, { useState } from "react";
import axios from "axios";

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

    const showMask = () => {
        return (
            <div className="indicator">
                <span className="indicator-item indicator-bottom indicator-center badge badge-primary">Mask</span>

            </div>
        )
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-neutral-content w-full h-full">
                <div className="flex flex-col text-center justify-center items-center gap-y-6">
                    <h1 className="mb-5 text-5xl font-bold">Demo</h1>
                    <div className="flex w-full gap-x-6 justify-center">
                        <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        <button className="btn btn-primary" onClick={handleUpload}>Segment</button>
                    </div>
                    <div className="flex w-full gap-x-2">
                        <div className="grid h-auto flex-grow card bg-base-100 rounded-box place-items-center">
                            {imgUrl && (
                                <div className="indicator">
                                    <span className="indicator-item indicator-bottom indicator-center badge badge-primary">Input Image</span>
                                    <img className="rounded-lg" src={imgUrl} alt="Input Image" />
                                </div>
                            )}
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-auto flex-grow card bg-base-100 rounded-box place-items-center">
                            {imgUrl && (isLoading ? (
                                <span className="loading loading-ball loading-lg"></span>
                            ) : (
                                <div className="indicator">
                                    <span className="indicator-item indicator-bottom indicator-center badge badge-primary">Segmenation Mask</span>
                                    <img className="rounded-lg" src={maskUrl} alt="Segmentation Mask" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;