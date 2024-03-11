import React from "react";

function About() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">About the Project</h1>
                <p className="py-6">This research aims to create a DeepLabV3+ model with a ResNet50 backbone for binary segmentation of plant images, differentiating between soil and plants. The project utilizes the PyTorch deep learning library, employing strategies like Dice Loss, Adam optimizer, and early stopping during training. Key metrics, including Intersection over Union, Pixel Accuracy, and Dice Coefficient, are tracked. The training and validation datasets consist of plant images with ground truth binary mask labels from three datasets: Eschikon Wheat Segmentation (EWS), Humans in the Loop (HIL) Plant Semantic Segmentation, and Computer Vision Problems in Plant Phenotyping (CVPPP) Leaf Counting Challenge. These datasets vary in terms of image sizes, annotation styles, and plant types. The research outlines the camera specifications and settings used for data collection, emphasizing the diversity of lighting and soil conditions. The ultimate goal is to develop a robust model for accurately segmenting plant-related regions, with potential applications in agriculture, botany, and environmental sciences. The provided code demonstrates data preparation, model architecture creation, training, and evaluation using various metrics.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About;