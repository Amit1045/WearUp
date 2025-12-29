import { useEffect, useState } from "react";
import Footer from "./Footer";
const fandoms = [
    {
        id: 1,
        title: "NASA",
        img: "https://i.pinimg.com/736x/96/1d/e6/961de6db7dbcef191e5959c92a8d7470.jpg",
    },
    {
        id: 2,
        title: "HARRY POTTER",
        img: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2024/DECEMBER/31/MBFCKxOU_641d15833de54b2d9d643968d963bc8b.jpg",
    },
    {
        id: 3,
        title: "SUPERMAN",
        img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/8/784e0e4685192_1.jpg",
    },
    {
        id: 4,
        title: "MARVEL",
        img: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/HMSS000013_1.JPG",
    },
    {
        id: 5,
        title: "DEMON SLAYER",
        img: "https://rukminim2.flixcart.com/image/480/640/xif0q/t-shirt/x/t/g/-original-imahew835nzkzbsu.jpeg?q=90"
    },
    {
        id: 6,
        title: "DC",
        img: "https://images.bewakoof.com/t1080/men-s-white-vengeance-typography-oversized-t-shirt-519142-1745907892-1.jpg"
    },

];
function Trending() {
    return (
        <div>
            <section className="overflow-hidden">
                <h1 className="text-2xl md:text-3xl text-center font-bold mt-8 mb-8 font-sans">
                    <span className="font-extrabold font-cursive">Trend Spill :</span>{" "}
                    Straight From Fashion Week
                </h1>

                <div className="relative w-full overflow-hidden">
                    <div className="marquee flex gap-6 w-max hover:[animation-play-state:paused]">
                        {[...fandoms, ...fandoms].map((item, index) => (
                            <div
                                key={index}
                                className="w-[600px] h-[600px] rounded-xl shrink-0 cursor-pointer overflow-hidden"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                  <div className='relative w-80 p-4 bg-black text-white text-2xl rounded-2xl text-center -top-[20%] left-[25%]'> {item.title}</div>
                            </div>
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

export  function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative w-full h-[520px] overflow-hidden rounded-3xl "
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
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {slide.title}
              </h1>
              <p className="text-lg mb-5">{slide.desc}</p>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
                Shop Now →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ›
      </button>

      {/* THUMBNAILS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3  px-4 py-2 rounded-2xl">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            onClick={() => setActive(index)}
            className={`w-30 h-30 object-cover rounded-xl cursor-pointer border-5 border-gray-400 hover:scale-105  transition
              ${active === index ? "border-gray-700 scale-105" : "border-grey-400"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
