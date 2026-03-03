import React from 'react'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Footer from './Footer';
import { products } from '../../Data/products';
import { Link } from "react-router-dom"
const fandomProducts = products.filter(p => p.section === "fandom");
const heroSlideSection=products.filter(p => p.section === "hero");
const NewArrivalProduct=products.filter(p => p.section === "new");

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" relative
    w-full
    max-w-[600px]
    h-[260px]
    sm:h-80
    lg:h-[420px]
    rounded-2xl
    overflow-hidden">

      <img
        src={images[index]}
        alt="carousel"
        className="w-full h-full object-cover"
      />

      {/* Left Button */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/90 hover:bg-white 
        shadow-md p-3 rounded-full text-xl font-bold"
      >
        ←
      </button>

      {/* Right Button */}
      <button
        onClick={goNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/90 hover:bg-white 
        shadow-md p-3 rounded-full text-xl font-bold"
      >
        →
      </button>

      {/* Explore Button */}
      <Link to={'/selectProduct'}>
        <button className="absolute bottom-6 left-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 
      text-white rounded-lg shadow-md">
          Explore →
        </button>
      </Link>
      <div className="absolute bottom-16 left-6">
        <span className="font-bold text-white text-[30px] drop-shadow-lg">
          {index === 0 ? "Aesthetic Wears" : "Casual Wears"}
        </span>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

function HomePage() {
  const imgs = [
    "https://www.shutterstock.com/image-photo/stylish-young-man-light-coat-600nw-2641150267.jpg",
    "https://img.freepik.com/free-photo/young-beautiful-blonde-woman-jacket-blue-wall-with-mobile-phone-doing-online-shopping_496169-1447.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  return (
    <div >
      <section className="w-full bg-pink-50">
        <div className="max-w-7xl mx-auto px-5 py-12 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
              Redefine your <span className="text-pink-500">style</span> this season.
            </h1>

            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              Explore trend-forward collections crafted for your everyday confidence.
              From streetwear to sophistication, find pieces that move with you.
            </p>

            <div className="flex gap-3 justify-center lg:justify-start">
              <Link to={'/women'}>
                <button className="relative overflow-hidden px-6 py-2 border border-pink-500 text-pink-500 font-medium rounded-full group cursor-pointer">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white"> Shop Women </span>
                  <span className="absolute inset-0 bg-pink-600 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100">
                  </span> </button>
              </Link>
              <Link to={'/men'}><button className="px-5 py-2 rounded-full border border-blue-500 cursor-pointer text-blue-600 font-semibold text-sm hover:scale-105 smooth">
                Shop Men
              </button></Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2">
            <ImageCarousel images={imgs} />
          </div>

        </div>
      </section>


      {/* Below Hero Section */}
      <section>
        <HeroCarousel />
      </section>
      <section>
        <NewArrivalSection />
      </section>
      <section>
        <div className='w-full mt-12 py-6 shadow-lg rounded '>
          <a href="/home">
            <img className='rounded' src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/jpeg-optimizer_sc_widget_banner_updated.jpg" />
          </a>
        </div>
      </section>
      <section>
        <FeaturedCollection />
      </section>
      <section>
        <HighlightedProduct />
      </section>
      <section className='bg-gray-100'>
        <HoverImageMenu />
      </section>
      <section>
        <ShopByFandom />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Detect screen size properly
  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex =2;

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000); // 1 second

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goNext = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goPrev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full overflow-hidden relative py-10 bg-white">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * (100 / slidesPerView)}%)`,
        }}
      >
        {heroSlideSection.map((item, i) => (
         <Link to={`/product/${item.id}`} key={item.id}>
         <div className="relative h-[600px] w-[600px] sm:h-[360px] lg:h-[460px] gap-2 rounded-3xl overflow-hidden shadow-lg">
           
           <img
             src={item.image}
             alt={item.brand}
             className="w-full h-full object-cover"
           />
     
           <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
             <p className="text-white text-xs sm:text-sm">
               {item.subtitle}
             </p>
             <h2 className="text-white font-extrabold text-xl sm:text-2xl lg:text-4xl">
               {item.brand}
             </h2>
           </div>
     
         </div>
       </Link>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="hidden lg:flex absolute top-1/2 left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow"
      >
        ←
      </button>

      <button
        onClick={goNext}
        className="hidden lg:flex absolute top-1/2 right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export function NewArrivalSection() {

  return (
    <section className="w-full px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        New <span className="text-pink-600">Arrivals</span>
      </h2>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          lg:grid-cols-4
        "
      >
        {NewArrivalProduct.map((item, i) => (
          <Link to={`/product/${item.id}`} key={item.id}>
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-[220px] object-cover"
              />

              {/* NEW BADGE */}
              <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">
                NEW
              </span>
            </div>

            {/* DETAILS */}
            <div className="p-3 text-center">
              <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                {item.brand}
              </h3>

              <p className="text-sm font-bold mt-1">
                ₹{item.price}
              </p>

              {/* COLOR DOTS */}
              <div className="flex justify-center gap-2 mt-2">
                {item.color.map((c, idx) => (
                  <span
                    key={idx}
                    className="w-3 h-3 rounded-full border"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </section>
  );
}

export function FeaturedCollection() {
  const featuredItems = [
    {
      imgsrc: "https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg",
      title: "DROPPING SOON",
      tall: true
    },
    {
      imgsrc: "https://image.hm.com/assets/hm/77/5a/775afd7e121de98e26c7bc2890cf4109efa36213.jpg",
      title: "SHIRTS"
    },
    {
      imgsrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/3d/45/70/friendly-shop.jpg",
      title: "SHOES"
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
      title: "JEANS",
      tall: true
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
      title: "PERFUME"
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
      title: "T-SHIRTS"
    },
    {
      imgsrc: "https://t4.ftcdn.net/jpg/02/49/08/19/360_F_249081945_tv8Huuf4mhjvHPg9ylS2zl6R2N5ISYUB.jpg",
      title: "ACCESSORIES"
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
      title: "HOODIES"
    },
    {
      imgsrc: "https://img.thecdn.in/340015/dkexu_512-1711613453366.webp?width=600&format=webp",
      title: "SNEAKERS"
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
      title: "WINTER WEAR",
      tall: true
    },
    {
      imgsrc: "https://www.thestatesman.com/wp-content/uploads/2017/08/1487751524-collection-of-bags-getty-517.jpg",
      title: "BAGS"
    },
    {
      imgsrc: "https://m.media-amazon.com/images/I/41NDmkI6vBL._AC_SY350_.jpg",
      title: "SUNGLASSES"
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
      title: "CAMERA"
    }
  ];

  return (
    <section className="w-full px-4 py-10">
    <h2 className="text-center text-sm font-bold tracking-widest mb-6">
      FEATURED CATEGORIES
    </h2>
  
    <div
      className="
        grid
        grid-cols-2
        gap-4
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      {featuredItems.map((item, i) => (
        <Link
          key={i}
          to="/selectProduct"
          className={`
            relative
            block
            rounded-xl
            overflow-hidden
            group
            ${item.tall ? "row-span-2 h-[420px]" : "h-[200px]"}
          `}
        >
          <img
            src={item.imgsrc}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
  
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
  
          {/* Text */}
          <span
            className="
              absolute
              bottom-3
              left-1/2
              -translate-x-1/2
              bg-white
              text-black
              text-xs
              font-bold
              px-3
              py-1
              rounded-full
              shadow
            "
          >
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  </section>
  );
}

export function HighlightedProduct() {
  const [moveImg1, setMoveImg1] = useState(0);

  const images = [
    "https://baccabucci.com/cdn/shop/files/PPG_banner_1.png?v=1760417417",
    "https://baccabucci.com/cdn/shop/files/web_banner_1.jpg?v=1758347846",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveImg1((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div
        className="
          relative
          w-full
          h-[45vh]
          sm:h-[55vh]
          lg:h-[65vh]
          overflow-hidden
          rounded-2xl
          shadow-lg
        "
      >
        {/* Images */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="carousel"
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-1000 ease-in-out
              ${i === moveImg1 ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            `}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-6 sm:bottom-10 left-5 sm:left-10 max-w-xs sm:max-w-md text-white">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-wide">
            Premium Footwear
          </h2>
          <p className="mt-2 text-sm sm:text-base opacity-90">
            Style that moves with you
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setMoveImg1(i)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all
                ${i === moveImg1 ? "bg-white scale-125" : "bg-white/50"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const hoverImages = [
  {
    title: "Casual Wears",
    leftImg: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    rightImg: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
  },
  {
    title: "Men T-Shirt",
    leftImg: "https://images.unsplash.com/photo-1590999659195-e64a988eaf4f",
    rightImg: "https://images-platform.99static.com//MZ2XrZGJPVL_v3s7ltKdTqCP_rY=/0x0:2040x2040/fit-in/590x590/99designs-contests-attachments/134/134468/attachment_134468955",
  },
  {
    title: "Winter Hoodie",
    leftImg: "https://images.unsplash.com/photo-1674695662162-cc9cdf494e88",
    rightImg: "https://images.unsplash.com/photo-1558547484-ecee6e67c86b",
  },
  {
    title: "Denim Jeans",
    leftImg: "https://plus.unsplash.com/premium_photo-1690034979560-d8a1fecb653e",
    rightImg: "https://offduty.in/cdn/shop/files/IMG_80852_1080x.webp?v=1727295674",
  },
  {
    title: "Men Jacket",
    leftImg: "https://plus.unsplash.com/premium_photo-1708275670170-f92d0c82a1d3",
    rightImg: "https://images.unsplash.com/photo-1675877879221-871aa9f7c314"
  },
  {
    title: "Party Dress",
    leftImg: "https://images.unsplash.com/photo-1652501099310-35cc40f22868",
    rightImg: "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw2d502218/images/feeds/UC128237.jpg",
  },
  {
    title: "Ethnic Wear",
    leftImg: "https://www.missprintclothing.com/cdn/shop/files/GL2076_1.jpg",
    rightImg: "https://www.ethnicmela.in/cdn/shop/files/002___6897_1_d8ba6474-1bb0-4b2b-93c2-cfe5a71edbb8.jpg",
  },
  {
    title: "Aesthetic Outfit",
    leftImg: "https://i.redd.it/what-do-you-call-this-kind-of-outfit-aesthetic-v0-9rw005zf76yc1.jpg?width=736&format=pjpg&auto=webp&s=82b04faee4a34e34ac956be61e373463f1be0aac",
    rightImg: "https://thumbs.dreamstime.com/b/fresh-mint-urban-look-girl-s-aesthetic-monochrome-color-trends-aqua-menthe-188285064.jpg",
  },
];

export function HoverImageMenu() {
  const [activeItem, setActiveItem] = useState(hoverImages[0]);

  return (
    <div className="
  w-full min-h-screen
  flex flex-col lg:flex-row
  items-center justify-center lg:justify-between
  gap-10
  px-6 md:px-12 lg:px-20
">


      {/* LEFT IMAGE */}
      <div className="
        w-[280px] h-[360px]
        sm:w-[320px] sm:h-[420px]
        lg:w-[400px] lg:h-[500px]
        overflow-hidden rounded-2xl
      ">
        <img
          src={activeItem.leftImg}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* CENTER MENU */}
      <div className="flex flex-col gap-4 sm:gap-6 text-center">
        {hoverImages.map((item, index) => (
          <h2
            key={index}
            onMouseEnter={() => setActiveItem(item)}
            className={`
              text-xl sm:text-2xl lg:text-3xl
              tracking-wide cursor-pointer
              transition-all duration-300
              ${activeItem.title === item.title
                ? "text-yellow-400 font-bold scale-105"
                : "text-black"
              }
            `}
          >
            {item.title}
          </h2>
        ))}
      </div>

      {/* RIGHT IMAGE */}
      <div className="
        w-[280px] h-[360px]
        sm:w-[320px] sm:h-[420px]
        lg:w-[400px] lg:h-[500px]
        overflow-hidden rounded-2xl
      ">
        <img
          src={activeItem.rightImg}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

    </div>
  );
}

const ShopByFandom = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Shop by Fandom
      </h1>

      <div className="relative">
        {/* Left Button – desktop only */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 
          z-10 bg-black/70 text-white w-10 h-10 rounded-full items-center justify-center"
        >
          ‹
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 sm:gap-6
            overflow-x-auto md:overflow-x-hidden
            scroll-smooth no-scrollbar
            snap-x snap-mandatory
          "
        >
          {fandomProducts .map((item) => (
             <Link to={`/product/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="
                snap-start
                min-w-[260px] sm:min-w-[300px] lg:min-w-[350px]
                bg-white rounded-3xl shadow-md p-4
              "
            >
              <div className="
                w-full h-[320px] sm:h-[380px] lg:h-[450px]
                overflow-hidden rounded-2xl
              ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-extrabold mt-4 sm:mt-6">
                {item.title}
              </h2>
            </div>
            </Link>
          ))}
        </div>

        {/* Right Button – desktop only */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 
          z-10 bg-black/70 text-white w-10 h-10 rounded-full items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
};
