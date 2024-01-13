// ExperienceCard.js
import React from "react";
import Image from "next/image";

const ExperienceCard = ({ imageSrc, alt, title, description, startDate, endDate }) => {
  const dateRange = `${startDate} - ${endDate || "Presente"}`;

  return (
    <div className="relative bg-opacity-70 rounded-lg overflow-hidden my-4">
      <div className="flex">
        <div className="flex flex-col justify-between bg-black bg-opacity-50 text-white p-6">
        <div className="relative h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 mx-4 overflow-hidden rounded-lg object-cover">
          <Image
            src={imageSrc}
            alt={alt}
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-s text-gray-300">{dateRange}</p>
          </div>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
