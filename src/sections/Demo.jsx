import React, { useState } from "react";
import axios from "axios";

function Demo() {
    const [file, setFile] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [imgBlob, setImgBlob] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            sendFile(base64String);
        };
        reader.onerror = (err) => {
            console.error("Error reading the file: ", err);
        };
    };

    const sendFile = async (base64String) => {
        try {
            const res = await axios.post('http://localhost:8000/segment',
                {
                    img_base64: base64String,
                },
                {
                    headers: { "Content-Type": "application/json" }
                },
            );
            console.log(res.data.mask);
            setImgUrl(res.data.mask)
            const blob = b64toBlob(imgUrl, "image/png", 512);
            setImgBlob(blob);

        } catch (err) {
            console.error(err);
        }
    };

    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-100">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Demo</h1>
                    <input type="file" onChange={handleFileChange} />
                    <button className="btn btn-primary" onClick={handleUpload}>Segment</button>
                    {imgUrl && <img src={URL.createObjectURL(imgBlob)} alt="Segmentation Mask" />}
                </div>
            </div>
        </div>
    );
}

export default Demo;