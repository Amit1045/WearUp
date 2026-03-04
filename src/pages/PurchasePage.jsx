import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../../Data/products";
import { ShoppingBag } from "lucide-react";
import Footer from "./Footer";

export default function PurchasePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const numericId = Number(id);

  const product = products.find((p) => p.id === numericId);

  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div className="p-10 text-center">Product Not Found</div>;
  }

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const item = {
      id: product.id,
      name: product.brand,
      price: product.price,
      image: product.image,
      size: selectedSize,
      qty: 1,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(item);

    localStorage.setItem("cart", JSON.stringify(existingCart));

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-10 py-12">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl max-h-[600px] object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{product.brand}</h1>
          <p className="text-gray-500">{product.title}</p>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">₹{product.price}</span>

            <span className="line-through text-gray-400">
              ₹{product.originalPrice}
            </span>

            <span className="text-green-600 font-semibold">
              {product.discount}% OFF
            </span>
          </div>

          {/* SIZE */}
          <div>
            <p className="font-semibold mb-2">Select Size</p>

            <div className="flex gap-3">
              {product.size.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 border rounded-lg transition
                    ${
                      selectedSize === s
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO BAG */}
          <button
            onClick={handleAddToBag}
            className="w-full flex items-center cursor-pointer justify-center gap-2 bg-yellow-400 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-500"
          >
            <ShoppingBag size={20} />
            ADD TO BAG
          </button>

          {/* HIGHLIGHTS */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>

            <div className="grid grid-cols-2 gap-4">
              <Highlight label="Category" value={product.category} />
              <Highlight label="Gender" value={product.gender} />
              <Highlight label="Color" value={product.color} />
              <Highlight label="Occasion" value={product.subtitle} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Highlight({ label, value }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-semibold text-sm">{value}</span>
    </div>
  );
}