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
        className='z-auto min-h-[350px] h-[350px] md:h-[calc(100vh-100px)] md:max-h-[800px] md:overflow-y-hidden md:w-full'
      >
        <div className='flex relative min-h-[350px] h-[350px] md:h-[calc(100vh-100px)] w-full overflow-hidden'>
          <video
            className='flex h-full absolute w-full top-0 object-cover'
            src='/assets/home/video.mp4'
            muted
            autoPlay
            loop
          />
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=' tracking-widest absolute top-[220px] md:top-[400px] left-[30px] md:left-[100px] h-[40px] text-white font-semibold text-2xl md:text-4xl'
          >
            _Desde cero
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=' tracking-widest absolute top-[245px] md:top-[440px] left-[70px] md:left-[180px] h-[40px] text-white font-semibold text-2xl md:text-4xl'
          >
            al denim.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className='absolute top-[280px] md:top-[480px] left-[20px] text-white md:left-[150px] text-2xl md:text-4xl overflow-hidden'
          >
            <Link to='/nosotros'>Conozca Capricórnio.</Link>
          </motion.div>
        </div>
        <div className='flex relative min-h-[350px] h-[350px] md:h-[calc(100vh-100px)] w-full overflow-hidden'>
          <img
            src='/assets/home/banner-2.webp'
            alt=''
            className='flex absolute w-full h-full object-cover'
          />
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='tracking-widest  absolute top-[170px] left-[70px] h-[40px] text-white font-semibold text-2xl md:text-4xl md:top-[400px] md:left-[150px]'
          >
            Necesita ayuda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='absolute top-[200px] left-[20px] text-white text-2xl md:text-4xl md:top-[450px] md:left-[120px] overflow-hidden'
          >
            Encuentre el denim ideal
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='absolute top-[230px] left-[40px] text-white text-2xl md:text-4xl md:top-[490px] md:left-[150px] overflow-hidden'
          >
            para sus jeans.
          </motion.p>
        </div>
        <div className='flex relative min-h-[350px] h-[350px] md:h-[calc(100vh-100px)] w-full overflow-hidden'>
          <img
            src='/assets/home/banner-1.webp'
            alt=''
            className='flex w-full h-full absolute object-cover'
          />
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='tracking-widest absolute top-[220px] left-[50px] h-[40px] text-white font-semibold text-2xl md:text-4xl md:top-[400px] md:left-[100px]'
          >
            Le gustaría comprar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ color: '#AAA55B' }}
            className='absolute top-[250px] left-[70px] text-white text-xl overflow-hidden font-semibold tracking-wide md:text-4xl md:top-[450px] md:left-[120px]'
          >
            Pongase en contacto con nosotros
          </motion.p>
        </div>
      </Slider>

      <TextBlock />

      <Slider
        {...settings}
        className='z-auto min-h-[350px] h-[350px] md:max-h-[800px] md:h-[650px]'
      >
        <div className='!flex !items-center !justify-center min-h-[350px] h-[350px] w-full overflow-hidden bg-slider-1 bg-cover bg-no-repeat bg-right-top md:h-[650px]'>
          <div className='flex md:flex-row-reverse md:gap-x-20 h-full'>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src='/assets/home/gal1.webp'
              alt='gal1'
              className='flex relative scale-[0.6] h-[200px] md:h-full'
            />

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='flex flex-col w-full items-center relative top-[20px] md:h-full md:justify-center md:top-[0]'
            >
              <h2 className='hidden md:flex font-semibold tracking-widest text-white md:absolute md:left-0 md:top-[100px] md:text-4xl'>
                _collab capri
              </h2>
              <img
                src='/assets/home/gal2.webp'
                alt='gal1'
                className='flex relative h-[150px] md:h-1/2'
              />
              <h2 className='flex text-2xl font-semibold tracking-widest text-white w-[100px] md:absolute md:left-[300px] md:text-4xl'>
                _another place + sou de algodão
              </h2>
            </motion.div>
          </div>
        </div>

        <div className='!flex !justify-center min-h-[350px] h-[350px] w-full overflow-hidden bg-slider-2 bg-cover bg-no-repeat bg-right-top pt-4 md:pt-0 md:h-[650px]'>
          <div className='flex md:gap-x-20'>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src='/assets/home/gal4.webp'
              alt='gal4'
              className='flex relative scale-[0.6] h-[250px] md:h-full'
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='absolute top-[220px] flex text-2xl font-semibold tracking-widest text-white'
            >
              <h2 className='absolute top-[50px] md:hidden'>_capri</h2>
              <h2 className='absolute top-[80px] left-[40px] md:hidden'>
                trends
              </h2>
            </motion.div>

            <motion.div className='flex flex-col w-full items-center relative top-[20px] md:top-0 justify-center'>
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='relative hidden md:flex text-4xl font-semibold tracking-widest text-white w-full'
              >
                _capri
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='relative hidden md:flex text-4xl font-semibold tracking-widest text-white w-full'
              >
                trends
              </motion.h2>
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src='/assets/home/gal3.webp'
                alt='gal3'
                className='flex relative h-[200px] md:h-1/2 md:w-full md:object-cover'
              />
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='absolute -left-[20px] top-[250px] flex text-xl font-semibold tracking-widest text-white w-[200px] md:hidden'
              >
                con Rodrigo Zen
              </motion.h2>
              <h2 className='relative hidden md:flex text-4xl font-semibold tracking-widest text-white w-full md:pt-2'>
                con Rodrigo Zen
              </h2>
            </motion.div>
          </div>
        </div>

        <div className='!flex !justify-center min-h-[350px] h-[350px] w-full overflow-hidden bg-slider-3 bg-cover bg-no-repeat bg-right-top pt-6 md:h-[650px] md:pt-0'>
          <div className='flex relative md:gap-x-8 md:justify-center md:items-center'>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src='/assets/home/gal5.webp'
              alt='gal5'
              className='flex relative scale-[0.6] h-[200px] top-[20px] md:top-0 md:h-1/2 '
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='absolute top-[190px] md:top-0  md:left-0 -left-[20px] flex text-2xl font-semibold tracking-widest text-white w-full'
            >
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='absolute top-[30px] md:text-4xl'
              >
                _semana
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='absolute top-[60px] w-[150px] md:top-[70px] md:text-4xl'
              >
                de la moda
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='absolute md:top-[110px] top-[90px] md:text-4xl'
              >
                SS24
              </motion.h2>
            </motion.div>

            <motion.div className='flex flex-col w-full items-center relative md:h-full'>
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src='/assets/home/gal6.webp'
                alt='gal6'
                className='flex relative h-[250px] md:h-full'
              />
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='md:hidden absolute left-0 top-[270px] flex text-xl font-semibold tracking-widest text-slate-700 w-[200px]'
              >
                con mucho jean!
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </Slider>

      <img
        src='/assets/home/logocapri.webp'
        alt='logocapri_watermark'
        className='absolute top-[70px] -right-[150px] z-auto md:top-0 md:-right-[600px] md:scale-[60%] opacity-70'
      />

      <Slider
        {...settings}
        className='z-auto min-h-[300px] h-[300px] md:h-[650px] md:max-h-[450px] overflow-y-hidden md:w-full'
      >
        <div className='flex relative min-h-[300px] h-[300px] md:h-[650px] md:max-h-[450px] w-full overflow-hidden bg-slider-4 bg-cover bg-no-repeat	bg-[-50px] md:bg-[0px]'>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='tracking-widest absolute top-[200px] md:left-[100px] left-[30px] h-[40px] text-white font-semibold text-2xl md:text-4xl'
          >
            Ser y hacer lo correcto
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='absolute top-[230px] cursor-pointer left-[100px] md:top-[250px] md:left-[250px] text-white text-2xl md:text-4xl overflow-hidden'
          >
            <Link to='/nosotros'>Conozca Capricórnio.</Link>
          </motion.div>
        </div>
        <div className='flex relative min-h-[300px] h-[300px] md:h-[650px] md:max-h-[450px] w-full overflow-hidden bg-slider-5 bg-cover bg-no-repeat	bg-left-top'>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='tracking-widest absolute top-[135px] left-[50px] h-[40px] text-white font-semibold text-2xl md:text-4xl'
          >
            Movimiento sustentable
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ color: '#AAA55B' }}
            className='absolute top-[170px] left-[70px] text-white text-xl md:text-2xl overflow-hidden font-semibold tracking-wide'
          >
            Participando de iniciativas sustentables.
          </motion.p>
        </div>
      </Slider>
    </>
  )
}

export default HomePage
