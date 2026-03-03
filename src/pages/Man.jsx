import React from 'react'
import Footer from './Footer';
import { products } from '../../Data/products';
import { Link } from "react-router-dom"
const MenCategories = products.filter(p => p.section === "men-category");
const ClothesCategory = products.filter(p => p.section === "men-clothing-category");


// const MenCategories = [
//   {
//     id: 1,
//     title: "Men T-Shirts",
//     img: "https://images.unsplash.com/photo-1520975439795-1c92e8a4f6e3?w=800",
//   },
//   {
//     id: 2,
//     title: "Casual Shirts",
//     img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800",
//   },
//   {
//     id: 3,
//     title: "Denim Jeans",
//     img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
//   },
//   {
//     id: 4,
//     title: "Men Hoodies",
//     img: "https://m.media-amazon.com/images/I/61fH5qTCFvL._AC_UY1100_.jpg",
//   },
//   {
//     id: 5,
//     title: "Sneakers",
//     img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
//   },
//   {
//     id: 6,
//     title: "Formal Wear",
//     img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
//   },
//   {
//     id: 7,
//     title: "Men Jackets",
//     img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
//   },
//   {
//     id: 8,
//     title: "Men Footwear",
//     img: "https://image.made-in-china.com/2f0j00oILbzAJaMwkB/Men-Sandals-Beach-Slippers-Outdoor-Shoes.webp",
//   },
//   {
//     id: 9,
//     title: "Watches",
//     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
//   },
//   {
//     id: 10,
//     title: "Men Accessories",
//     img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
//   },
// ];



const collections = [
  {
    img: "https://image.hm.com/assets/hm/4b/c3/4bc3bde925528b833337e501cdcc3ca18841b056.jpg?imwidth=2160",
    subtitle: "Oversized",
    title: "SWEATSHIRT ",
  },
  {
    img: "https://nobero.com/cdn/shop/files/Neversayno_f70587e7-63b3-4337-bb94-022deabc7651.jpg",
    subtitle: "Edgy-Plus-Size",
    title: "T-SHIRTS",
  },
  {
    img: "https://assets.ajio.com/medias/sys_master/root/20240913/XLC4/66e3be536f60443f3177cc78/-473Wx593H-700417694-grey-MODEL.jpg",
    subtitle: "COMFY",
    title: "HODDIES",
  },


];

function Man() {
  return (
    <div>
      <section>
        <div className='w-full'>
          <img className='w-full' src="https://images.bewakoof.com/uploads/grid/app/dotw-banner---thin-strip-desktop---TBR--men--1--1761928828.jpg" alt="" />
        </div>
      </section>
      <section className="w-screen bg-center py-10 overflow-hidden">
        <div className="w-full bg-white relative py-6">
          <div className="flex w-max gap-6 marquee">
            {[...MenCategories, ...MenCategories].map((item, index) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div
                  key={index}
                  className="relative w-[350px] h-[400px] rounded-2xl overflow-hidden shrink-0 cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="w-full h-full object-cover"
                  />

                  {/* Bottom Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/90 text-white rounded-xl px-4 py-3 text-center">
                    <h3 className="text-lg font-bold">
                      {item.brand}
                    </h3>
                    <p className="text-sm opacity-90">
                      UNDER ₹799
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/31/u7DPeZgp_4b3fe83d47eb4f3d97fa6a71941ef1c6.jpg" />
      </section>
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h1 className="font-extrabold text-center text-4xl mb-12 tracking-tight">
          Shop by Category
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ClothesCategory.map((item, index) => (
             <Link to={`/product/${item.id}`} key={item.id}>
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold tracking-wide">
                  {item.brand}
                </h2>

                <p className="text-red-600 font-bold text-2xl mt-1">
                  {item.discount}
                </p>

                <button className="mt-4 px-6 py-2 border border-black text-sm cursor-pointer font-medium rounded-full hover:bg-black hover:text-white transition">
                  Shop Now
                </button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-white overflow-hidden">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Latest Collections
        </h2>

        <div className="overflow-hidden">
          <div className="marquee flex gap-6 w-max">

            {[...collections, ...collections].map((item, index) => (
              <div
                key={index}
                className="relative min-w-[360px] h-[520px] rounded-3xl overflow-hidden shadow-xl shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute inset-4 border-2 border-white rounded-2xl"></div>

                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-white px-4">
                  <p className="tracking-[0.3em] text-sm uppercase">
                    {item.subtitle}
                  </p>
                  <h3 className="text-4xl font-extrabold mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <Footer />

    </div>
  )
}

export default Man