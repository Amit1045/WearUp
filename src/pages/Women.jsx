import React from 'react'

import Footer from './Footer';

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
const WomenClothesCategory = [
    {
        imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        ClothType: "Casual Wears",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        ClothType: "Men T-Shirt",
        Discount: "40-60% off",
    },
    {
        imgsrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSQMUv5CuoP0181G3kIq-C4qjArVbfswBT6chOmZlnH4Bh5oFIAt3HbGkSrC9KWHL701MEDZPXo5KACEnH-7fAwzwLnyiPqIzA1-TR3ZI",
        ClothType: "Winter Hoodie",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
        ClothType: "Denim Jeans",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        ClothType: "Casual Wears",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        ClothType: "Men T-Shirt",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSQMUv5CuoP0181G3kIq-C4qjArVbfswBT6chOmZlnH4Bh5oFIAt3HbGkSrC9KWHL701MEDZPXo5KACEnH-7fAwzwLnyiPqIzA1-TR3ZI",
        ClothType: "Winter Hoodie",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
        ClothType: "Denim Jeans",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        ClothType: "Casual Wears",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        ClothType: "Men T-Shirt",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSQMUv5CuoP0181G3kIq-C4qjArVbfswBT6chOmZlnH4Bh5oFIAt3HbGkSrC9KWHL701MEDZPXo5KACEnH-7fAwzwLnyiPqIzA1-TR3ZI",
        ClothType: "Winter Hoodie",
        Discount: "40-60% off"
    },
    {
        imgsrc: "https://www.urbanofashion.com/cdn/shop/files/cfjeantowl-003-dblue.jpg?v=1764942493",
        ClothType: "Denim Jeans",
        Discount: "40-60% off"
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
                        <img className='rounded w-full h-[800px] ' src="https://img.freepik.com/premium-psd/horizontal-banner-template-design-online-shopping-fashion-sale_797457-3.jpg?w=1480" />
                    </a>
                </div>
            </section>
            <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-center py-10">
                <div className="w-full mt-[-180px] overflow-hidden bg-white relative py-6">
                    <div className="flex w-max gap-6 marquee">
                        {[...fandoms, ...fandoms].map((item, index) => (
                            <img
                                key={index}
                                src={item.img}
                                alt={item.title}
                                className="w-[350px] h-[400px] object-cover rounded-xl shrink-0 cursor-pointer"
                            />
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