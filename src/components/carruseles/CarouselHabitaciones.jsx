// Import Swiper core and required modules
import { Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Carousel.css";
import { useEffect, useState } from "react";

const habitaciones = [
  {
    descripcion:
      "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado.",
    title: "Estandar",
    images: [
      { image1: "./images/seccionHabitaciones/estandar/estandar1.webp" },
      { image2: "./images/seccionHabitaciones/estandar/estandar2.webp" },
      { image3: "./images/seccionHabitaciones/estandar/estandar3.webp" },
    ],
  },
  {
    descripcion:
      "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor",
    title: "Mini suite",
    images: [
      { image1: "./images/seccionHabitaciones/minisuite/minisuite1.webp" },
      { image2: "./images/seccionHabitaciones/minisuite/minisuite2.webp" },
      { image3: "./images/seccionHabitaciones/minisuite/minisuite3.webp" },
    ],
  },
  {
    descripcion:
      "Incluye: Baño privado, telefonía, internet, TV con cable, aire acondicionado, sala recibidor (compartida)",
    title: "Duplex",
    images: [
      { image1: "./images/seccionHabitaciones/duplex/duplex1.webp" },
      { image2: "./images/seccionHabitaciones/duplex/duplex2.webp" },
      { image3: "./images/seccionHabitaciones/duplex/duplex3.webp" },
    ],
  },
];

// Componente para el contenido del slide
const SlideContentLg = ({ habitacion }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative z-10 p-4 bg-brick bg-opacity-70 text-white rounded-md transition-all duration-300">
      <h1 className="text-[1.8rem] font-normal leading-9">
        {habitacion.title}
      </h1>
      <button className="text-[1rem] font-light border-white border rounded-lg px-6 mt-5 text-center">
        Saber menos
      </button>
    </div>
  );
};

const SlideContentMd = ({ habitacion }) => {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center p-4  transition-all duration-300">
      <h1 className="text-[1.3rem] font-normal text-orange-600 pt-2 ml-3">
        {habitacion.title}
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="col-span-2">
          <img
            src={habitacion.images[0].image1}
            alt="Imagen 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={habitacion.images[1].image2}
            alt="Imagen 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={habitacion.images[2].image3}
            alt="Imagen 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="translate-y-5">{habitacion.descripcion}</h3>
    </div>
  );
};

export const Carousel = () => {
  const [windoWidth, setWindoWidth] = useState(0);

  useEffect(() => {
    setWindoWidth(window.innerWidth);
  }, [windoWidth]);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      speed={500}
      className="w-full h-full flex justify-center items-center "
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {habitaciones.map((habitacion) => (
        <SwiperSlide
          key={habitacion.title}
          className="flex justify-center pb-12 "
        >
          <div className="font-spartan max-w-96 h-[590px]  left-1/2 -translate-x-1/2 relative flex justify-center items-center  ">
            {windoWidth >= 1024 ? (
              <SlideContentLg habitacion={habitacion} />
            ) : (
              <SlideContentMd habitacion={habitacion} />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
