// Import Swiper core and required modules
import {
  Pagination,
  EffectFade,
  EffectCreative,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";

const estancias = [
  {
    id: 1,
    title: "Temporal",
    servicios: [
      "Habitaciones con baño privado y televisión con cable.",
      "Servicio de lavandería.",
      "Servicio de limpieza.",
      "Cámaras de vigilancia las 24 horas, con acceso de los familiares a través de una app.",
      "Enfermería 24 horas.",
      "Alimentación.",
      "Valoración médica.",
      "Terapias físicas, cognitiva y ocupacional.",
    ],
    image: "./images/seccionEstancia/estancia_temporal.webp",
  },
  {
    id: 2,
    title: "Casa de Dia",
    servicios: [
      "Servicios de vigilancia de enfermería las 24 hrs",
      "Servicios de vigilancia las 24hrs, con acceso de los familiares a través de una app",
      "Alimentación",
      "Terapias físicas, cognitiva y ocupacional.",
    ],
    image: "./images/seccionEstancia/estancia_casadia.webp",
  },
  {
    id: 3,
    title: "Permanente",
    servicios: [
      "Habitaciones con baño privado y televisión con cable.",
      "Servicio de lavandería.",
      "Servicio de limpieza.",
      "Cámaras de vigilancia las 24 horas, con acceso de los familiares a través de una app.",
      "Enfermería 24 horas.",
      "Alimentación.",
      "Valoración médica.",
      "Terapias físicas, cognitiva y ocupacional.",
      "Sábado de buffet desayuno familiar.",
    ],
    image: "./images/seccionEstancia/estancia_permanente.webp",
  },
];

// Componente para el contenido del slide
const SlideContent = ({ estancia, showData, setShowData }) => {
  if (showData) {
    return (
      <div className="w-full h-full relative z-10 p-4 bg-brick bg-opacity-95 text-white rounded-md transition-all duration-300">
        <h1 className="text-[2rem] font-normal">Servicios que incluye:</h1>
        <ul>
          {estancia.servicios.map((servicio, i) => (
            <li className="font-light text-[20px]" key={i}>
              - {servicio}
            </li>
          ))}
        </ul>
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
      <h1 className="text-[1.8rem] font-normal leading-9">{estancia.title}</h1>
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
  const swiper = useSwiper();

  return (
    <Swiper
      modules={[Pagination, EffectCreative]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      effect="creative"
      loop={true}
      speed={500}
      allowSlideNext={!showData}
      allowSlidePrev={!showData}
      className="w-full h-full flex justify-center items-center "
    >
      {estancias.map((estancia) => (
        <SwiperSlide key={estancia.id} className="flex justify-center ml-20 ">
          <button onClick={() => swiper.slideNext}>
            Slide to the next slide
          </button>
          <div className="font-spartan w-80 h-[590px]  left-1/2 -translate-x-1/2 relative flex justify-center items-center">
            <img
              src={estancia.image}
              alt={estancia.title}
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md"
            />
            <SlideContent
              estancia={estancia}
              showData={showData}
              setShowData={setShowData}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
