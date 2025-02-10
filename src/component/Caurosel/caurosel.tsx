"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselImage = ({ images }: { images: StaticImageData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  console.log(images.length);
  const handleOnChange = (number: any) => {
    setCurrentIndex(number);
  };

  return (
    <>
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
        className=" mt-6 w-[90vw] mx-[0] md:w-[80vw]"
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
          afterChange={handleOnChange}
        >
          {images.map((image) => {
            return (
              <img
                alt={image.src}
                key={image.src}
                src={image.src}
                className="block h-auto m-auto w-[100%] md:w-[70%]"
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselImage;
