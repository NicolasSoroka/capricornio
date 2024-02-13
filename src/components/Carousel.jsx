import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: 'absolute', top: '0', right: '0', background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: 'absolute', top: '0', left: '0', background: 'green' }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings} className="-z-50">
      <div className="h-[250px] md:h-[650px] w-full">
        <video src="./home/video.mp4" muted autoPlay loop></video>
      </div>
      <div className="h-[250px]">
      </div>
      <div className="h-[250px]">
      </div>
    </Slider>
  );
}
