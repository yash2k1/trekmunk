'use client'
import React, { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
 const router=useRouter();
  return (
    <div className="relative overflow-hidden p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative "
          
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-fit group">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="relative overflow-hidden rounded-lg shadow-lg w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
              {hoveredIndex === index && (
                <div className="absolute bottom-6 w-full  flex items-center justify-center"
                 onMouseEnter={() => handleMouseEnter(index)}
                >
                  <div className="flex space-x-4">
                    <button className="bg-white rounded-full p-2 hover:bg-red-500 hover:text-white transition-colors duration-300">
                      <Trash className="h-5 w-5" />
                    </button>
                    <button className="bg-white rounded-full p-2 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                      <Pencil className="h-5 w-5" onClick={()=>router.push(`/admin/media/edit/${4}`)} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;