import { useEffect, useState } from "react";
import banner1 from "../../assets/bannerimg/banner1.webp";
import banner2 from "../../assets/bannerimg/banner2.webp";
import banner3 from "../../assets/bannerimg/banner3.webp";
import banner4 from "../../assets/bannerimg/banner4.webp";
import banner5 from "../../assets/bannerimg/banner5.webp";
import banner6 from "../../assets/bannerimg/banner6.webp";

export const Banner = () => {
  const bannerImg = [banner1, banner2, banner3, banner4,banner5,banner6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === bannerImg.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [bannerImg.length]);

  return (
    <div className="relative w-full mt-28 sm:mt-28 lg:mt-26 overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerImg.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-48 sm:h-64 md:min-h-80 lg:h-[400px]"
          >
            <img
              className="w-full h-full object-contain"
              src={img}
              alt={`banner-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerImg.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
