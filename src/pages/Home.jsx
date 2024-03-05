// import Carousel from '../components/Carousel'
import TextBlock from "../components/TextBlock";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VanishingText from "../components/VanishingText";
// import VanishingText from "./VanishingText";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        right: "10px",
        zIndex: "40",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        left: "10px",
        zIndex: "40",
      }}
      onClick={onClick}
    />
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // appendDots: dots => (
  //   <div
  //     style={{
  //       backgroundColor: "#ddd",
  //       borderRadius: "10px",
  //       padding: "10px"
  //     }}
  //   >
  //     <ul style={{ margin: "0px" }}> {dots} </ul>
  //   </div>
  // ),
  // customPaging: i => (
  //   <div
  //     style={{
  //       width: "30px",
  //       color: "blue",
  //       border: "1px blue solid"
  //     }}
  //   >
  //     {i + 1}
  //   </div>
  // )
};

const HomePage = () => {
  return (
    <>
      <Slider {...settings}>
        <div className="relative min-h-[350px] h-full w-full z-auto">
          <video
            className="flex h-full absolute top-0 object-cover"
            src="./home/video.mp4"
            muted
            autoPlay
            loop
          ></video>
          <VanishingText text="vanishing text test" top="200" size="text-2xl" />
          <VanishingText text="vanishing text test" top="200" size="text-2xl" />
        </div>
        <div className="flex relative min-h-[350px] h-[350px] md:h-full w-full">
          <img
            src="./home/banner-2.webp"
            alt=""
            className="flex absolute w-full h-full object-cover"
          />
          <VanishingText text="vanishing text test" top="200" size="text-2xl" />
          <VanishingText text="vanishing text test" top="200" size="text-2xl" />
        </div>
        <div className="flex relative h-[350px] md:h-full w-full">
          <img
            src="./home/banner-1.webp"
            alt=""
            className="flex w-full h-full absolute object-cover"
          />
          <VanishingText
            text="texto 111111"
            top="200"
            left="200"
            size="text-2xl"
          />
          <VanishingText text="2222 text test" top="200" size="text-2xl" />
        </div>
      </Slider>

      {/* <Slider {...settings} className="relative">
        <div className="relative min-h-[350px] h-full w-full"></div>
        <div className="min-h-[350px] h-full border-2 border-red-600">hola</div>
        <div className="min-h-[350px] h-full border-2 border-red-600">
          slide 3
        </div>
      </Slider>

      <TextBlock />
      <Slider {...settings} className="relative">
        <div className="relative min-h-[350px] h-full w-full"></div>
        <div className="min-h-[350px] h-full border-2 border-red-600">hola</div>
        <div className="min-h-[350px] h-full border-2 border-red-600">
          slide 3
        </div>
      </Slider> */}
    </>
  );
};

export default HomePage;
