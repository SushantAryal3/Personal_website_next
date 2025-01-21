"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

const Slider = ({ image }: { image: Array<StaticImageData> }) => {
  const [topImage, setTopImage] = useState<StaticImageData>(image[0]);

  const handleImageClick = (clickedImage: StaticImageData) => {
    setTopImage(clickedImage);
  };

  return (
    <div className="gap-4 my-5 max-w-fit border p-2">
      <div className="flex flex-col justify-start items-start">
        <div className="relative w-full h-[600px]">
          <Image
            className="object-contain rounded-lg"
            src={topImage.src}
            layout="fill"
            alt="Top Image"
          />
        </div>
        <div className="w-[60vw] mt-2 border-t-2 overflow-x-auto">
          <div className="w-max px-2 pt-2 flex flex-row gap-8">
            {image.map((img, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(img)}
                className={`transition-all duration-300 ease-in-out ${
                  topImage.src === img.src ? "border-4 border-blue-500" : ""
                }`}
              >
                <Image
                  className="h-[150px] w-[200px] cursor-pointer"
                  src={img.src}
                  width={200}
                  height={150}
                  alt={`Image ${index + 2}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
