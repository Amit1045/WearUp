import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer border rounded-xl p-4 hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h3 className="font-semibold mt-3">{product.title}</h3>
      <p className="text-gray-500 text-sm">{product.category}</p>

      <div className="flex gap-2 mt-2">
        <span className="font-bold">₹{product.price}</span>
        <span className="line-through text-gray-400 text-sm">
          ₹{product.originalPrice}
        </span>
        <span className="text-green-600 text-sm">
          {product.discount}% OFF
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
