const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <video
        className="w-full"
        src="../../about/video.mov"
        muted
        autoPlay
        loop
      />

      <p className="font-sans text-xl px-8 mt-4">
        Somos una distribuidora líder en Argentina, especializada en tela denim
        y gabardina, representando de manera exclusiva a una prestigiosa empresa
        textil brasileña con más de 75 años de experiencia en la industria.
        Desde hace más de una década, hemos sido el socio confiable que conecta
        a los argentinos con productos de calidad excepcional y respuesta
        inigualable. Nos enorgullece ofrecer a nuestros clientes lo mejor de la
        moda denim y gabardina, respaldado por décadas de experiencia y una
        sólida reputación en el mercado.
      </p>

      <div className="overflow-hidden md:relative flex justify-center md:p-0 h-[200px] md:h-[475px] md:w-[830px] md:max-w-none max-w-[360px] w-[330px] my-8">
        <img
          src="../public/about/watermark.webp"
          alt="watermark_About"
          className="hidden md:flex absolute -left-28 -top-24 z-20"
        />
        <iframe
          className="w-full h-full z-auto"
          src="https://www.youtube.com/embed/6xievQjS2G8?si=xkJmVxK3yTCOQhL6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="flex w-full gap-x-5 md:hidden">
        <img
          src="../public/about/img1.webp"
          alt="img1_about"
          className="w-[170px] h-[320px] object-cover"
        />
        <div className="flex flex-col pr-4 gap-y-4">
          <h2 className="text-2xl text-left font-semibold text-[#AAA55B]">
            Nuestra Visión
          </h2>
          <p className="text-right">
            Nuestra visión es ser reconocidos como el referente indiscutible en
            la distribución de tela denim y gabardina en Argentina, manteniendo
            nuestro compromiso con la excelencia en calidad y servicio. Nos
            esforzamos por superar las expectativas de nuestros clientes en cada
            interacción, siendo pioneros en la introducción de nuevas tendencias
            y tecnologías en el mercado local.
          </p>
        </div>
      </div>
      <p className="flex relative w-full text-right pr-4">
        Buscamos continuar siendo el puente entre la calidad brasileña y las
        demandas del exigente mercado argentino, consolidando nuestra posición
        como líderes en el sector textil.
      </p>

      <div className="flex w-full gap-x-5 mt-8 md:hidden">
        <div className="flex flex-col gap-y-4 pl-4">
          <h2 className="text-2xl text-right font-semibold text-[#AAA55B]">
            Nuestra Misión
          </h2>
          <p className="text-left">
          Nuestra misión es proporcionar a nuestros clientes en toda Argentina acceso a la mejor tela denim y gabardina, proveniente de una empresa familiar brasileña con una larga tradición de excelencia. Nos comprometemos a mantener una relación estrecha y transparente con nuestros clientes, brindando
          </p>
        </div>
        <img
          src="../public/about/img2.png"
          alt="img1_about"
          className="w-[200px] h-[320px] object-cover z-auto"
        />
      </div>
      
      <p className="text-left pl-4 mb-4">soluciones textiles que satisfagan sus necesidades y expectativas. A través de una distribución directa en las zonas más importantes del país, nos esforzamos por agilizar el proceso de adquisición y garantizar la disponibilidad de nuestros productos en todo momento.</p>

      {/* desktop */}

      <div className="hidden md:flex relative">
        <img
          src="../public/about/img1.webp"
          alt="img1_about"
          className="relative w-[530px] h-[900px] object-cover -top-[200px]"
        />
        <div className="border-2 border-red-600">
          <div className="flex flex-col text-left">
            <h2>_nossa</h2>
            <h2>visao</h2>
            <p>Ser referência em tudo que fazemos!</p>
          </div>
          <div className="text-right">
            <h2>_nossos</h2>
            <h2>valores</h2>
            <p>
              Nossa cultura é humana, aberta e acolhedora, e está no sorriso de
              cada colaborador.
            </p>
            <p>
              Não tomamos atalhos, somos verdadeiros, éticos e transparentes.
            </p>
            <p>
              Somos dinâmicos e eficientes, valorizamos o diálogo fácil, a
              atuação ágil e flexível, pois entendemos as necessidades e
              desafios do mercado
            </p>
            <p>
              Somos inconformados, inquietos e criativos, temos paixão pelo que
              fazemos e queremos sempre entregar mais e melhor!
            </p>
          </div>
        </div>
        <img
          src="../public/about/img2.png"
          alt="img1_about"
          className="w-[530px] h-[1000px] object-cover z-10 relative top-[200px]"
        />
      </div>
    </div>
  );
};

export default AboutPage;
