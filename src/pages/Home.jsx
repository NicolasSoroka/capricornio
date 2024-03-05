import TextBlock from "../components/TextBlock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { color, motion } from "framer-motion";

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
};

const HomePage = () => {
  return (
    <>
      <Slider
        {...settings}
        className="z-auto min-h-[350px] h-[350px] md:h-full"
      >
        <div className="flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden">
          <video
            className="flex h-full absolute top-0 object-cover"
            src="./home/video.mp4"
            muted
            autoPlay
            loop
          />
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" tracking-widest absolute top-[220px] left-[30px] h-[40px] text-white font-semibold text-2xl"
          >
            _Desde cero
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" tracking-widest absolute top-[245px] left-[70px] h-[40px] text-white font-semibold text-2xl"
          >
            al denim.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute top-[280px] left-[20px] text-white text-2xl overflow-hidden"
          >
            Conozca Capricórnio.
          </motion.p>
        </div>
        <div className="flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden">
          <img
            src="./home/banner-2.webp"
            alt=""
            className="flex absolute w-full h-full object-cover"
          />
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" tracking-widest  absolute top-[170px] left-[70px] h-[40px] text-white font-semibold text-2xl"
          >
            Necesita ayuda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-[200px] left-[20px] text-white text-2xl overflow-hidden"
          >
            Encuentre el denim ideal
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[230px] left-[40px] text-white text-2xl overflow-hidden"
          >
            para sus jeans.
          </motion.p>
        </div>
        <div className="flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden">
          <img
            src="./home/banner-1.webp"
            alt=""
            className="flex w-full h-full absolute object-cover"
          />
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="tracking-widest absolute top-[220px] left-[50px] h-[40px] text-white font-semibold text-2xl"
          >
            Le gustaria comprar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ color: "#AAA55B" }}
            className="absolute top-[250px] left-[70px] text-white text-xl overflow-hidden font-semibold tracking-wide"
          >
            Pongase en contacto con nosotros
          </motion.p>
        </div>
      </Slider>

      <Slider
        {...settings}
        className="z-auto min-h-[350px] h-[350px] md:h-full"
      >
        <div className="flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" tracking-widest absolute top-[220px] left-[30px] h-[40px] text-white font-semibold text-2xl"
          >
            _Desde cero
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" tracking-widest absolute top-[245px] left-[70px] h-[40px] text-white font-semibold text-2xl"
          >
            al denim.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute top-[280px] left-[20px] text-white text-2xl overflow-hidden"
          >
            Conozca Capricórnio.
          </motion.p>
        </div>
        <div className="flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden">
          <img
            src="./home/banner-2.webp"
            alt=""
            className="flex absolute w-full h-full object-cover"
          />
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" tracking-widest  absolute top-[170px] left-[70px] h-[40px] text-white font-semibold text-2xl"
          >
            Necesita ayuda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-[200px] left-[20px] text-white text-2xl overflow-hidden"
          >
            Encuentre el denim ideal
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[230px] left-[40px] text-white text-2xl overflow-hidden"
          >
            para sus jeans.
          </motion.p>
        </div>
        <div className="flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden">
          <img
            src="./home/banner-1.webp"
            alt=""
            className="flex w-full h-full absolute object-cover"
          />
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="tracking-widest absolute top-[220px] left-[50px] h-[40px] text-white font-semibold text-2xl"
          >
            Le gustaria comprar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ color: "#AAA55B" }}
            className="absolute top-[250px] left-[70px] text-white text-xl overflow-hidden font-semibold tracking-wide"
          >
            Pongase en contacto con nosotros
          </motion.p>
        </div>
      </Slider>
    </>
  );
};

export default HomePage;
