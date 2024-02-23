import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: 'center', right: '10px', zIndex: '40' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex', alignItems: 'center', left: '10px', zIndex: '40'}}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  var settings = {
    dots: true,
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

  return (
    <Slider {...settings} className="-z-50 relative">
      <div className="h-[250px] md:h-[650px] w-full border-2 border-blue-600">
        <video src="./home/video.mp4" muted autoPlay loop></video>
      </div>
      <div className="h-[250px]">
        hola
      </div>
      <div className="h-[250px]">
        slide 3
      </div>
    </Slider>
  );
}

export default Carousel