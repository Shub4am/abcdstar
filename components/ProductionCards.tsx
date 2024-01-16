"use client";
import Image from "next/image";
import React, { FC, useState } from "react";

interface ProductionCardProps {
  imgAlt: string;
  imgSrc: string;
  vidSrc: string;
}

const ProductionCards: FC<ProductionCardProps> = ({
  imgAlt,
  imgSrc,
  vidSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="px-2 py-2 mb-10 select-none">
      <div
        className="w-56 h-32 rounded-lg hover:scale-110 transition ease-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <video
            className="w-full object-cover rounded-lg"
            autoPlay
            muted
            loop
            src={vidSrc}
          ></video>
        ) : (
          <Image
            alt={imgAlt || ""}
            src={imgSrc || ""}
            loading="lazy"
            unoptimized
            width="0"
            height="0"
            className="rounded-lg object-cover w-[224px] h-[128px] outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default ProductionCards;
