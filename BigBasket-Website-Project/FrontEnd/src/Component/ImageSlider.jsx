import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://www.bigbasket.com/media/uploads/banner_images/b2c081912730-24800_b2c_hp_dnc_cm_domex_460_250824_all.jpg?tr=w-1920,q=80",
  },
  {
    url: "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
  },
  {
    url: "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80",
  },
  {
    url: "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "300px",
  backgroundSize: "cover",
  borderRadius: "20px",
};

function ImageSlider() {
  return (
    <div>
      <Slide>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlider;
