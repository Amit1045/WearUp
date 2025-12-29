import React from 'react'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Footer from './Footer';

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
    <div className="relative w-[600px] h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white">

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
      <button className="absolute bottom-6 left-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 
      text-white rounded-lg shadow-md">
        Explore →
      </button>
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
      <section className="w-full h-[600px] flex justify-center items-center p-[50px] left-[12%] bg-pink-100">
        {/* LEFT SECTION */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-6xl font-extrabold">
            Redefine your <span className="text-pink-500">style</span><br /> this season.
          </h1>

          <p className="text-gray-600 text-sm">
            Explore trend-forward collections crafted for your everyday confidence.
            From streetwear to sophistication, find pieces that move with you.
          </p>

          <div className="flex gap-4">
            <button className="border border-blue-500 bg-blue-600 px-5 py-2 text-white font-bold cursor-pointer rounded-lg text-[16px] transition-transform duration-300 hover:scale-110">
              Shop Men
            </button>

            <button className="relative overflow-hidden px-6 py-2 border border-pink-500 
             text-pink-500 font-medium rounded-lg group cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Shop Women
              </span>

              <span className="absolute inset-0 bg-pink-600 scale-x-0 origin-left 
               transition-transform duration-500 group-hover:scale-x-100">
              </span>
            </button>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <ImageCarousel images={imgs} />
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


const slides = [
  {
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDn3F27jmXAsgZj6exb_Ol-DPTz431kzEx8ocx5HF1QQc8-aEuYArP2I63BMOUIRyQSxBsVYHdVMETQj4KKFw-Zic82TRYJRl91jp52z2yqaoYdmfUekvt",
    subtitle: "USE CODE: CARGOS100 • FLAT ₹100 OFF",
    title: "THE CARGO CULTURE",
  },
  {
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVTbz_VvyEQS7rwdclaNqKY3uJk6Gnm2i9RNjrrUNl_WxSY4YK-3MaOOws7NAdEFUjqByGm5SJgFXX20TfqtBPxERUOD-7wteQggG0Hhoa8JvORr6Z3I45jg",
    subtitle: "DRIP-CODED SHIRTS",
    title: "ALL TIME FAVOURITES",
  },
  {
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1n_8I009gDukOs_C2oOPalQd6C2XrIHw73n4KZjTMO8oymILleMWRqBDaZQXGFSIsrWiDNdIvletCeOjn0z15mVVkEs_9Xrsl_s8tJyV1fP_-6vc3QFlP",
    subtitle: "DESIGNS OF THE WEEK",
    title: "THE BOHO REVIVAL",
  },
  {
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVTbz_VvyEQS7rwdclaNqKY3uJk6Gnm2i9RNjrrUNl_WxSY4YK-3MaOOws7NAdEFUjqByGm5SJgFXX20TfqtBPxERUOD-7wteQggG0Hhoa8JvORr6Z3I45jg",
    subtitle: "DRIP-CODED SHIRTS",
    title: "ALL TIME FAVOURITES",
  },
  {
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1n_8I009gDukOs_C2oOPalQd6C2XrIHw73n4KZjTMO8oymILleMWRqBDaZQXGFSIsrWiDNdIvletCeOjn0z15mVVkEs_9Xrsl_s8tJyV1fP_-6vc3QFlP",
    subtitle: "DESIGNS OF THE WEEK",
    title: "THE BOHO REVIVAL",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full overflow-hidden relative py-10 bg-white">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * (100 / slides.length)}%)` }}
      >
        {slides.map((item, i) => (
          <div key={i} className="w-1/3 px-4 shrink-0">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[460px]">
              <img src={item.img} className="w-full h-full object-cover" alt="" />

              {/* OVERLAY CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/60 to-transparent">
                <p className="text-white tracking-wide text-sm mb-1">
                  {item.subtitle}
                </p>
                <h2 className="text-white font-extrabold text-4xl leading-tight">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
      > ←
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={goNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
      >
        →
      </button>

      {/* DOTS */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function NewArrivalSection() {
  const clothesDesign = [
    {
      imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      ClothType: "Casual Wears",
      price: "1299",
      color: ["blue", "green", "yellow"]
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      ClothType: "Men T-Shirt",
      price: "999",
      color: ["black", "white"]
    },
    {
      imgsrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSQMUv5CuoP0181G3kIq-C4qjArVbfswBT6chOmZlnH4Bh5oFIAt3HbGkSrC9KWHL701MEDZPXo5KACEnH-7fAwzwLnyiPqIzA1-TR3ZI",
      ClothType: "Winter Hoodie",
      price: "2499",
      color: ["grey", "navy", "maroon"]
    },
    {
      imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
      ClothType: "Denim Jeans",
      price: "2100",
      color: ["lightblue", "darkblue"]
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      ClothType: "Casual Wears",
      price: "1299",
      color: ["blue", "green", "yellow"]
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      ClothType: "Men T-Shirt",
      price: "999",
      color: ["black", "white"]
    },
    {
      imgsrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSQMUv5CuoP0181G3kIq-C4qjArVbfswBT6chOmZlnH4Bh5oFIAt3HbGkSrC9KWHL701MEDZPXo5KACEnH-7fAwzwLnyiPqIzA1-TR3ZI",
      ClothType: "Winter Hoodie",
      price: "2499",
      color: ["grey", "navy", "maroon"]
    },
    {
      imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
      ClothType: "Denim Jeans",
      price: "2100",
      color: ["lightblue", "darkblue"]
    }
  ];

  return (
    <div className="w-full px-6 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">New  <span className=' text-pink-600'>Arrival</span></h2>

      {/* Responsive grid */}
      <div className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      gap-6">

        {clothesDesign.map((item, i) => (
          <div key={i} className="shadow-lg rounded-2xl bg-yellow-50 overflow-hidden cursor-pointer">

            <img
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              src={item.imgsrc}
              alt={item.ClothType}
            /><span className='relative p-1 bg-green-600 rounded bottom-[60%] left-[5%] text-white text-[12px]'>NEW</span>

            <div className="text-center p-4">
              <h2 className="font-bold text-xl">{item.ClothType}</h2>
              <p className="text-lg">Rs{item.price}</p>

              {/* Color circles */}
              <div className="flex justify-center gap-2 mt-2">
                {item.color.map((c, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: c }}
                  ></div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedCollection() {
  const featuredItems = [
    {
      imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      ClothType: "Casual Wears",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      ClothType: "Men T-Shirt",

    },
    {
      imgsrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSQMUv5CuoP0181G3kIq-C4qjArVbfswBT6chOmZlnH4Bh5oFIAt3HbGkSrC9KWHL701MEDZPXo5KACEnH-7fAwzwLnyiPqIzA1-TR3ZI",
      ClothType: "Winter Hoodie",

    },
    {
      imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
      ClothType: "Denim Jeans",

    },
    {
      imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      ClothType: "Casual Wears",

    },
    {
      imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      ClothType: "Men T-Shirt",

    },
    {
      imgsrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSQMUv5CuoP0181G3kIq-C4qjArVbfswBT6chOmZlnH4Bh5oFIAt3HbGkSrC9KWHL701MEDZPXo5KACEnH-7fAwzwLnyiPqIzA1-TR3ZI",
      ClothType: "Winter Hoodie",

    },
    {
      imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
      ClothType: "Denim Jeans",

    },
    {
      imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
      ClothType: "Denim Jeans",

    },
    {
      imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
      ClothType: "Denim Jeans",

    },
    {
      imgsrc: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fHww",
      ClothType: "Denim Jeans",

    },
    {
      imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
      ClothType: "Denim Jeans",

    }
  ];

  return (
    <div className='w-full px-8 py-8 '>
      <h1 className='text-2xl text-center font-bold mb-2'>Featured Collection</h1>
      <div className='grid w-[90%] ml-[100px] 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-6 
                      gap-2 ' >
        {featuredItems.map((Fitem) => (
          <div className="border-amber-50 relative overflow-hidden">
            <img
              className="block w-full h-64 object-cover hover:scale-105 transition-transform duration-500" alt={Fitem.ClothType}
              src={Fitem.imgsrc}
            />

            <span className="absolute  bottom-[4%] left-[20%] font-extrabold text-gray-700 bg-white text-center p-2 rounded cursor-pointer">
              {Fitem.ClothType}
            </span>
          </div>
        ))}</div>
    </div>
  )
}

export function HighlightedProduct() {
  const [moveImg1, setMoveImg1] = useState(0)
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

    <div className="relative w-full h-[70vh] md:h-[60vh] overflow-hidden rounded-2xl shadow-lg">
      {/* Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="carousel"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000
            ${i === moveImg1 ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/20 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-10 left-10 text-white">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
          Premium Footwear
        </h2>
        <p className="mt-2 text-lg opacity-90">
          Style that moves with you
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setMoveImg1(i)}
            className={`w-3 h-3 rounded-full transition-all
              ${i === moveImg1 ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
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

export  function HoverImageMenu() {
  const [activeItem, setActiveItem] = useState(hoverImages[0]);

  return (
    <div className="w-full min-h-screen flex items-center justify-between px-20">
      
      {/* LEFT IMAGE */}
      <div className="w-[400px] h-[500px] overflow-hidden rounded-2xl">
        <img
          src={activeItem.leftImg}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* CENTER MENU */}
      <div className="flex flex-col gap-6 text-center">
        {hoverImages.map((item, index) => (
          <h2
            key={index}
            onMouseEnter={() => setActiveItem(item)}
            className={`text-3xl tracking-wide cursor-pointer transition-all duration-300
              ${
                activeItem.title === item.title
                  ? "text-yellow-400 font-bold scale-105"
                  : "text-black"
              }`}
          >
            {item.title}
          </h2>
        ))}
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-[400px] h-[500px] overflow-hidden rounded-2xl">
        <img
          src={activeItem.rightImg}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

    </div>
  );
}

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


  
const ShopByFandom = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-10 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Shop by Fandom
      </h1>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ‹
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth no-scrollbar"
        >
          {fandoms.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] bg-white rounded-3xl shadow-md p-4"
            >
              <div className="w-full h-[350px] overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <h2 className="text-center text-2xl font-extrabold mt-6">
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
}