import React from 'react'
import { useEffect, useState } from 'react';
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
      <div className="absolute bottom-10 left-6">
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

// const clothesDesign = [
//   {
//     imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
//     ClothType: "Casual Wears",
//     price: "2000",
//     color: ["blue", "green", "yellow"]
//   },
//   {
//     imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
//     ClothType: "Men T-Shirt",
//     price: "999",
//     color: ["black", "white"]
//   },
//   {
//     imgsrc: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800",
//     ClothType: "Winter Hoodie",
//     price: "2499",
//     color: ["grey", "navy", "maroon"]
//   },
//   {
//     imgsrc: "https://images.unsplash.com/photo-1519415943484-9fa1873496f8?w=800",
//     ClothType: "Denim Jeans",
//     price: "2100",
//     color: ["lightblue", "darkblue"]
//   },
//   {
//     imgsrc: "https://images.unsplash.com/photo-1503341733017-19054d0f0f38?w=800",
//     ClothType: "Men Jacket",
//     price: "3200",
//     color: ["brown", "black"]
//   },
//   {
//     imgsrc: "https://images.unsplash.com/photo-1520975918313-6c2c1b86f981?w=800",
//     ClothType: "Party Dress",
//     price: "4500",
//     color: ["red", "gold"]
//   },
//   {
//     imgsrc: "https://images.unsplash.com/photo-1622445271177-6c42e36fcff7?w=800",
//     ClothType: "Ethnic Wear",
//     price: "1800",
//     color: ["yellow", "white"]
//   },
//   {
//     imgsrc: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
//     ClothType: "Aesthetic Outfit",
//     price: "2600",
//     color: ["cream", "beige", "brown"]
//   }
// ];


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

    }
  ];

  return (
    <div className='w-full px-6 py-6 '>
     <h1 className='text-2xl text-center'>Featured Collection</h1>
     <div className='flex ' >
      {featuredItems.map((Fitem) => (
        <>
            <img className='w-[300px] h-[300px]' src={Fitem.imgsrc} />
          <span >{Fitem.ClothType}</span>
          </>
      ))}</div>
       </div>
  )
}