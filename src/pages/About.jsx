const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <video
        className="w-full"
        src="../../about/video.mov"
        muted
        autoPlay
        loop
      ></video>
      <h2>_somos</h2>
      <h2>de verdade</h2>

      <p>Somos uma tecelagem e produzimos o denim, a matéria-prima do Jeans.</p>

      <p>Somos uma empresa familiar brasileira, fundada há mais de 75 anos.</p>

      <p>
        Somos a segunda maior produtora de denim do mercado nacional, com 60
        milhões de metros produzidos por ano, aproximadamente 850 colaboradores
        e mais de 2.000 clientes.
      </p>

      <h3>Somos apaixonados por pessoas, pelo jeans e pelo nosso negócio!</h3>

      <div className="md:relative flex justify-center p-8 md:p-0 h-[250px] md:h-[475px] w-[830px]">
        <img
          src="../public/about/watermark.webp"
          alt="watermark_About"
          className="hidden md:flex absolute -left-28 -top-24 z-20"
        />
        <iframe
          className="w-full h-full z-10"
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
        <div className="flex flex-col pr-4">
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
          </div>
        </div>
      </div>

      <div className="flex w-full gap-x-5 md:hidden">
        <div className="flex flex-col gap-y-4">
          <p>
            Somos dinâmicos e eficientes, valorizamos o diálogo fácil, a atuação
            ágil e flexível, pois entendemos as necessidades e desafios do
            mercado
          </p>
          <p>
            Somos inconformados, inquietos e criativos, temos paixão pelo que
            fazemos e queremos sempre entregar mais e melhor!
          </p>
        </div>
        <img
          src="../public/about/img2.png"
          alt="img1_about"
          className="w-[200px] h-[320px] object-cover z-10"
        />
      </div>

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
