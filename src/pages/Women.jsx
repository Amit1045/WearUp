import React from 'react'

import Footer from './Footer';

const ItemsForWomen = [
    {
        title: "Closed Toe Footwear",
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
        price: "MIN. 75% OFF",
    },
    {
        title: "Boho-Fusion Dresses",
        img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
        price: "STARTING ₹399",
    },
    {
        title: "Handbags & Totes",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
        price: "UP TO 60% OFF",
    },
    {
        title: "Makeup Essentials",
        img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
        price: "STARTING ₹299",
    },
    {
        title: "Casual Kurtis",
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
        price: "MIN. 50% OFF",
    },
    {
        title: "Ethnic Wear Sets",
        img: "https://images.unsplash.com/photo-1600180758895-9f38f6c3e65b?w=800",
        price: "STARTING ₹699",
    },
    {
        title: "Statement Jewellery",
        img: "https://images.unsplash.com/photo-1617038260897-41a1f14a9d14?w=800",
        price: "UP TO 70% OFF",
    },
    {
        title: "Women Heels",
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
        price: "STARTING ₹499",
    },
    {
        title: "Sling & Crossbody Bags",
        img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
        price: "MIN. 40% OFF",
    },
];

const WomenClothesCategory = [
    {
      imgsrc: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800",
      ClothType: "Casual Dresses",
      Discount: "30-50% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      ClothType: "Women Tops",
      Discount: "40-60% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800",
      ClothType: "Kurtis & Tunics",
      Discount: "35-55% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      ClothType: "Women Footwear",
      Discount: "50-70% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800",
      ClothType: "Handbags",
      Discount: "45-65% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800",
      ClothType: "Ethnic Wear Sets",
      Discount: "30-60% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
      ClothType: "Makeup Essentials",
      Discount: "20-40% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800",
      ClothType: "Fashion Jewellery",
      Discount: "55-75% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1584917869842-1b1dcb9b5c96?w=800",
      ClothType: "Sling & Crossbody Bags",
      Discount: "40-60% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
      ClothType: "Denim & Jeggings",
      Discount: "35-55% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
      ClothType: "Tank Tops",
      Discount: "25-45% OFF",
    },
    {
      imgsrc: "https://images.unsplash.com/photo-1585386959984-a41552231691?w=800",
      ClothType: "Women Accessories",
      Discount: "50-70% OFF",
    },
  ];
  
const collections = [
    {
        img: "https://images.unsplash.com/photo-1542925581-8db3deffbebb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
        subtitle: "Oversized",
        title: "SHIRTS",
    },
    {
        img: "https://images.unsplash.com/photo-1760998209708-5fc89d7983c0?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
        subtitle: "Edgy-Plus-Size",
        title: "T-SHIRTS",
    },
    {
        img: "https://images.unsplash.com/photo-1674695662162-cc9cdf494e88",
        subtitle: "COMFY",
        title: "HODDIES",
    },


];

function Women() {
    return (
        <div>
            <section className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden'>
                <div className='w-full shadow-lg rounded mt-[-180px] bg-cover '>
                    <a href="/home">
                        <img className='rounded w-full h-[620px]        /* mobile */
          sm:h-[320px]     /* small tablets */
          md:h-[420px]     /* tablets */
          lg:h-[520px]     /* laptops */
          xl:h-[650px]' src="https://img.freepik.com/premium-psd/horizontal-banner-template-design-online-shopping-fashion-sale_797457-3.jpg?w=1480" />
                    </a>
                </div>
            </section>
            <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-center py-10">
                <div className="w-full mt-[-180px] overflow-hidden bg-white relative py-6">
                    <div className="flex w-max gap-6 marquee">
                        {[...ItemsForWomen, ...ItemsForWomen].map((item, index) => (

                            // CARD
                            <div
                                key={index}
                                className="relative w-[350px] h-[400px] rounded-xl overflow-hidden shrink-0 cursor-pointer group"
                            >
                                {/* IMAGE */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* BLACK OVERLAY TITLE */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/90 text-white px-5 py-3 rounded-xl text-center min-w-[80%]">
                                    <h3 className="text-lg font-semibold tracking-wide">
                                        {item.title}
                                    </h3>

                                    {/* OPTIONAL SUBTEXT */}
                                    {item.price && (
                                        <p className="text-sm opacity-90">
                                            {item.price}
                                        </p>
                                    )}
                                </div>
                            </div>

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
                    {WomenClothesCategory.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.imgsrc}
                                    alt={item.ClothType}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 text-center">
                                <h2 className="text-lg font-semibold tracking-wide">
                                    {item.ClothType}
                                </h2>

                                <p className="text-red-600 font-bold text-2xl mt-1">
                                    {item.Discount}
                                </p>

                                <button className="mt-4 px-6 py-2 border border-black text-sm cursor-pointer font-medium rounded-full hover:bg-black hover:text-white transition">
                                    Shop Now
                                </button>
                            </div>
                        </div>
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

export default Women