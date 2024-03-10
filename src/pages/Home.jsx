import TextBlock from '../components/TextBlock'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SampleNextArrow (props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        right: '10px',
        zIndex: '40'
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow (props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        left: '10px',
        zIndex: '40'
      }}
      onClick={onClick}
    />
  )
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const HomePage = () => {
  return (
    <>
      <Slider
        {...settings}
        className='z-auto min-h-[350px] h-[350px] md:h-full'
      >
        <div className='flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden'>
          <video
            className='flex h-full absolute top-0 object-cover'
            src='./home/video.mp4'
            muted
            autoPlay
            loop
          />
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=' tracking-widest absolute top-[220px] left-[30px] h-[40px] text-white font-semibold text-2xl'
          >
            _Desde cero
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=' tracking-widest absolute top-[245px] left-[70px] h-[40px] text-white font-semibold text-2xl'
          >
            al denim.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className='absolute top-[280px] left-[20px] text-white text-2xl overflow-hidden'
          >
            <Link to='/nosotros'>Conozca Capricórnio.</Link>
          </motion.div>
        </div>
        <div className='flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden'>
          <img
            src='./home/banner-2.webp'
            alt=''
            className='flex absolute w-full h-full object-cover'
          />
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=' tracking-widest  absolute top-[170px] left-[70px] h-[40px] text-white font-semibold text-2xl'
          >
            Necesita ayuda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='absolute top-[200px] left-[20px] text-white text-2xl overflow-hidden'
          >
            Encuentre el denim ideal
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='absolute top-[230px] left-[40px] text-white text-2xl overflow-hidden'
          >
            para sus jeans.
          </motion.p>
        </div>
        <div className='flex relative min-h-[350px] h-[350px] md:h-full w-full overflow-hidden'>
          <img
            src='./home/banner-1.webp'
            alt=''
            className='flex w-full h-full absolute object-cover'
          />
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='tracking-widest absolute top-[220px] left-[50px] h-[40px] text-white font-semibold text-2xl'
          >
            Le gustaria comprar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ color: '#AAA55B' }}
            className='absolute top-[250px] left-[70px] text-white text-xl overflow-hidden font-semibold tracking-wide'
          >
            Pongase en contacto con nosotros
          </motion.p>
        </div>
      </Slider>

      <Slider
        {...settings}
        className='z-auto min-h-[350px] h-[350px] md:h-full'
      >
        <div className="!flex !items-center !justify-center min-h-[350px] h-[350px] md:h-full w-full overflow-hidden bg-[url('./home/bg1.png')] bg-cover bg-no-repeat bg-right-top">
          <div className='flex '>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src='./home/gal1.webp'
              alt='gal1'
              className='flex relative scale-[0.6] h-[200px]'
            />

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='flex flex-col w-full items-center relative top-[20px] '
            >
              <img
                src='./home/gal2.webp'
                alt='gal1'
                className='flex relative h-[150px]'
              />
              <h2 className='flex text-2xl font-semibold tracking-widest text-white w-[100px]'>
                _another place + sou de algodão
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="!flex !justify-center min-h-[350px] h-[350px] md:h-full w-full overflow-hidden bg-[url('./home/bg2.png')] bg-cover bg-no-repeat bg-right-top pt-4">
          <div className='flex '>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src='./home/gal4.webp'
              alt='gal4'
              className='flex relative scale-[0.6] h-[250px]'
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='absolute top-[220px] flex text-2xl font-semibold tracking-widest text-white '
            >
              <h2 className='absolute top-[50px]'>_capri</h2>
              <h2 className='absolute top-[80px] left-[40px]'>trends</h2>
            </motion.div>

            <motion.div className='flex flex-col w-full items-center relative top-[20px] '>
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src='./home/gal3.webp'
                alt='gal3'
                className='flex relative h-[200px]'
              />
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='absolute -left-[20px] top-[250px] flex text-xl font-semibold tracking-widest text-white w-[200px]'
              >
                con Rodrigo Zen
              </motion.h2>
            </motion.div>
          </div>
        </div>

        <div className="!flex !justify-center min-h-[350px] h-[350px] md:h-full w-full overflow-hidden bg-[url('./home/bg3.webp')] bg-cover bg-no-repeat bg-right-top pt-6">
          <div className='flex relative'>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src='./home/gal5.webp'
              alt='gal5'
              className='flex relative scale-[0.6] h-[200px] top-[20px] '
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='absolute top-[190px] -left-[20px] flex text-2xl font-semibold tracking-widest text-white w-full'
            >
              <h2 className='absolute top-[30px]'>_semana</h2>
              <h2 className='absolute top-[60px]'>de la moda</h2>
              <h2 className='absolute top-[90px]'>SS24</h2>
            </motion.div>

            <motion.div className='flex flex-col w-full items-center relative'>
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src='./home/gal6.webp'
                alt='gal6'
                className='flex relative h-[250px]'
              />
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='absolute left-0 top-[270px] flex text-xl font-semibold tracking-widest text-slate-700 w-[200px]'
              >
                con muchos jeans!
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </Slider>
      <div className='flex absolute w-full h-[400px] overflow-hidden top-0 left-0'>
        <img
          src='./home/logocapri.webp'
          alt='logocapri_watermark'
          className='absolute left-[140px] top-[55px] z-auto'
        />
      </div>
      <TextBlock />

      <Slider
        {...settings}
        className='z-auto min-h-[300px] h-[300px] md:h-full'
      >
        <div className="flex relative min-h-[300px] h-[300px] md:h-full w-full overflow-hidden bg-[url('./home/bann31.webp')] bg-cover bg-no-repeat	bg-[-50px]">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=' tracking-widest absolute top-[200px] left-[30px] h-[40px] text-white font-semibold text-2xl'
          >
            Ser y hacer lo correcto
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='absolute top-[230px] cursor-pointer left-[100px] text-white text-2xl overflow-hidden'
          >
            <Link to='/nosotros'>Conozca Capricórnio.</Link>
          </motion.div>
        </div>
        <div className="flex relative min-h-[300px] h-[300px] md:h-full w-full overflow-hidden bg-[url('./home/bann32.webp')] bg-cover bg-no-repeat	bg-left-top">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='tracking-widest absolute top-[135px] left-[50px] h-[40px] text-white font-semibold text-2xl'
          >
            Movimiento sustentable
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ color: '#AAA55B' }}
            className='absolute top-[170px] left-[70px] text-white text-xl overflow-hidden font-semibold tracking-wide'
          >
            Participando de iniciativas sustentables.
          </motion.p>
        </div>
        {/* <div className="flex relative min-h-[300px] h-[300px] md:h-full w-full overflow-hidden bg-[url('./home/bann33.webp')] bg-cover bg-no-repeat bg-left-top">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="tracking-widest absolute top-[220px] left-[50px] h-[40px] text-white font-semibold text-2xl"
          >
            Contactenos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ color: "#AAA55B" }}
            className="absolute top-[250px] left-[70px] text-white text-xl overflow-hidden font-semibold tracking-wide"
          >
            Participando de iniciativas sustentables.
          </motion.p>
        </div> */}
      </Slider>
    </>
  )
}

export default HomePage
