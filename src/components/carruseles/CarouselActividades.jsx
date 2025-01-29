// Import Swiper core and required modules
import { Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

const actividades = [
  {
    title: "Terapias Fisicas",
    descripcion:
      "Nuestras terapias fisicas son mas que simples sesiones; son experiencias que unen a nuestros residentes en un ambiente lleno de energia positiva y compañerismo.",

    caracteristicas: "(Individuales y grupales)",
    image: "./images/seccionActividades/terapia_fisica.webp",
  },
  {
    title: "Terapias Cognitivas",
    descripcion:
      "Adaptamos cada sesión a las necesidades únicas de nuestros residentes, estimulando mentes de manera personalizada promoviendo agilidad mental y bienestar emocional.",

    caracteristicas: "(Personalizadas por residente)",
    image: "./images/seccionActividades/terapia_cognitiva.webp",
  },
  {
    title: "Sábado buffet desayuno familiar",
    descripcion:
      "Una actividad diseñada para que los familiares de nuestros residentes compartan momentos especiales en un ambiente acogedor creando recuerdos significativos para ellos.",

    caracteristicas: "",
    image: "./images/seccionActividades/buffet_familiar.webp",
  },
  {
    title: "Eventos",
    descripcion:
      "Transformamos cada efeméride en un evento especial para nuestros residentes, organizando actividades temáticas que les brindan experiencias únicas y memorables.",

    caracteristicas: "",
    image: "./images/seccionActividades/eventos.webp",
  },
];

// Componente para el contenido del slide
const SlideContentMd = ({ actividad, showData, setShowData }) => {
  if (showData) {
    return (
      <div className="w-full h-full relative z-10 p-4 bg-brick bg-opacity-95 text-white rounded-md transition-all duration-300">
        <h1 className="text-[2rem] font-normal">{actividad.caracteristicas}</h1>
        <h2 className="font-light text-[20px]">{actividad.descripcion}</h2>
        <button
          className="text-[1rem] font-light border-white border rounded-lg px-6 mt-5 text-center"
          onClick={() => setShowData(false)}
        >
          Mostrar menos
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative z-10 p-4 bg-brick bg-opacity-70 text-white rounded-md transition-all duration-300">
      <h1 className="text-[1.8rem] font-normal leading-9">{actividad.title}</h1>
      <button
        className="text-[1rem] font-light border-white border rounded-lg px-6 mt-5 text-center"
        onClick={() => setShowData(true)}
      >
        Saber más
      </button>
    </div>
  );
};

export const Carousel = () => {
  const [showData, setShowData] = useState(false);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      speed={500}
      allowSlideNext={!showData}
      allowSlidePrev={!showData}
      className="w-full h-full flex justify-center items-center  mx-4"
    >
      {actividades.map((actividad, i) => (
        <SwiperSlide key={i} className="flex justify-center pb-12 ">
          <div className="font-spartan max-w-80 h-[540px] sm:max-w-96 sm:h-[550px]  left-1/2 -translate-x-1/2 relative flex justify-center items-center  ">
            <img
              src={actividad.image}
              alt={actividad.title}
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md "
            />
            <SlideContentMd
              actividad={actividad}
              showData={showData}
              setShowData={setShowData}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
