import React from 'react';
import { assets } from '../assets/assets';

const ProjectGallery = () => {
  const projectImages = [
    assets.project_img_1,
    assets.project_img_2,
    assets.project_img_3,
    assets.project_img_4,
    assets.project_img_5,
    assets.project_img_6,
    assets.project_img_7,
    assets.project_img_8,
  ];

  return (
    <div id="Projects" className="py-16 px-4 md:px-12 lg:px-32 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Prestige Clients
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group relative"
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '100%', // Forces square aspect ratio
            }}
          >
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="w-full h-full object-contain object-center transform transition-transform duration-500 group-hover:scale-105"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f8f8f8', // Optional: Set background color if there's empty space
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
