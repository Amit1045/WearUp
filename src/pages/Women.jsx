import React from 'react'
import Footer from './Footer';
import { products } from '../../Data/products';
import { Link } from "react-router-dom"
const ItemsForWomen = products.filter(p => p.section === "women");
const WomenClothesCategory = products.filter(p => p.section === "women-category");
const collections = products.filter(p => p.section === "collection");


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
                            <Link to={`/product/${item.id}`} key={item.id}>
                            
                                <div
                                    key={index}
                                    className="relative w-[350px] h-[400px] rounded-xl overflow-hidden shrink-0 cursor-pointer group"
                                >
                                    {/* IMAGE */}
                                    <img
                                        src={item.image}
                                        alt={item.brand}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* BLACK OVERLAY TITLE */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/90 text-white px-5 py-3 rounded-xl text-center min-w-[80%]">
                                        <h3 className="text-lg font-semibold tracking-wide">
                                            {item.brand}
                                        </h3>

                                        {/* OPTIONAL SUBTEXT */}
                                        {item.price && (
                                            <p className="text-sm opacity-90">
                                                ₹ {item.price}
                                            </p>
                                        )}
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
                    {WomenClothesCategory.map((item, index) => (
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
                                        {item.discount}% OFF
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
                            <Link to={`/product/${item.id}`} key={item.id}>
                                <div
                                    key={index}
                                    className="relative min-w-[360px] h-[520px] rounded-3xl overflow-hidden shadow-xl shrink-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.brand}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black/30"></div>

                                    <div className="absolute inset-4 border-2 border-white rounded-2xl"></div>

                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-white px-4">
                                        <p className="tracking-[0.3em] text-sm uppercase">
                                            {item.subtitle}
                                        </p>
                                        <h3 className="text-4xl font-extrabold mt-2">
                                            {item.brand}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Women