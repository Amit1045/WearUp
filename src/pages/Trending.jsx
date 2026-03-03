import { useEffect, useState } from "react";
import Footer from "./Footer";
import { products } from "../../Data/products";
import { Link } from "react-router-dom";
const fandoms = products.filter(p => p.section === "fandom");


function Trending() {
  return (
    <div>
      <section className="overflow-hidden">
        <h1 className="text-xl md:text-3xl text-center font-bold mt-8 mb-8 font-sans px-4">
          <span className="font-extrabold font-cursive">Trend Spill :</span>{" "}
          Straight From Fashion Week
        </h1>

        <div className="relative w-full overflow-hidden">
          <div className="marquee flex gap-4 md:gap-6 w-max hover:[animation-play-state:paused]">
            {[...fandoms, ...fandoms].map((item, index) => (
               <Link to={`/product/${item.id}`} key={item.id}>
              <div
                key={index}
                className="
            w-[260px] h-[340px]
            sm:w-[320px] sm:h-[420px]
            md:w-[420px] md:h-[520px]
            lg:w-[520px] lg:h-[600px]
            rounded-xl shrink-0 cursor-pointer overflow-hidden relative
          "
              >
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover"
                />

                {/* TITLE OVERLAY */}
                <div className="
            absolute bottom-6 left-1/2 -translate-x-1/2
            bg-black/80 text-white
            text-sm sm:text-lg md:text-xl
            px-6 py-3 rounded-xl
            text-center whitespace-nowrap
          ">
                  {item.brand}
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="m-10 py-12">
        <HeroCarousel />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Trending


const slides = [
  {
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1600",
    title: "#Resort Ready",
    desc: "Vacay fits that don’t quit",
  },

  {
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600",
    title: "New Arrivals",
    desc: "Fresh fashion picks",
  },
  {
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600",
    title: "Ultimate Style",
    desc: "Upgrade your wardrobe",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [pause]);

  return (
    <section
      className="
        relative w-full
        h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px]
        overflow-hidden rounded-3xl
      "
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            {/* TEXT */}
            <div className="
              absolute left-4 md:left-10
              top-1/2 -translate-y-1/2
              text-white max-w-[90%] md:max-w-lg
            ">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-2">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-lg mb-4">
                {slide.desc}
              </p>
              <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
                Shop Now →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={() => setActive((active - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 w-8 h-8 md:w-10 md:h-10 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={() => setActive((active + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 w-8 h-8 md:w-10 md:h-10 rounded-full"
      >
        ›
      </button>

      {/* THUMBNAILS */}
      <div className="
        absolute bottom-3 left-1/2 -translate-x-1/2
        flex gap-2 md:gap-3
        overflow-x-auto max-w-[90%]
      ">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            onClick={() => setActive(index)}
            className={`
              w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
              object-cover rounded-lg cursor-pointer border
              ${active === index ? "border-black scale-105" : "border-gray-300"}
            `}
          />
        ))}
      </div>
    </section>
  );
}

