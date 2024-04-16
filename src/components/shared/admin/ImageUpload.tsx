'use client'
import React, { useState, useRef, useEffect } from 'react';

interface ImageUploadProps {
    image?: string; // Making image prop optional
}

const ImageUpload: React.FC<ImageUploadProps> = ({ image }) => {
    const [imagePreview, setImagePreview] = useState<string | null>(image || null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = async () => {
        const file = fileInputRef.current?.files?.[0];

        if (file) {
            try {
                const base64String = await convertToBase64(file);
                setImagePreview(base64String);
            } catch (error) {
                console.error('Error converting image to base64:', error);
            }
        } else {
            setImagePreview(null);
        }
    };

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                const result = reader.result;

                if (typeof result === 'string') {
                    resolve(result);
                } else {
                    reject(new Error('Failed to convert image to base64'));
                }
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    useEffect(() => {
        // Trigger handleImageChange when the component mounts
        handleImageChange();
    }, []);

    return (
        <div className="text-orange-500 overflow-hidden hover:text-white relative flex flex-col items-center justify-center h-full w-full cursor-pointer">
            <input
                type="file"
                onChange={handleImageChange}
                id="image-upload"
                ref={fileInputRef}
                className="absolute z-10 w-full h-full opacity-0 cursor-pointer"
            />
            {imagePreview || image ? (
                <img src={imagePreview || image} alt="Image Preview" className=" object-cover z-0 cursor-pointer h-full w-full " />
            ) : (
                <span className=" z-0 cursor-pointer w-full text-center text-sm sm:text-normal">Drop your photo here or browse your computer.</span>
            )}
        </div>
    );
};

export default ImageUpload;
