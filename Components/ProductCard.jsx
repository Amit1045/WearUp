const ProductCard = ({ product }) => {
    return (
      <div className="h-84 border rounded-xl p-3 hover:shadow-md transition">
        <img
          src={product.image}
          alt={product.brand}
          className="h-64 w-full object-cover rounded-lg"
        />
        <h3 className="font-semibold mt-3">{product.brand}</h3>
        <div className="flex items-center gap-2 mt-1">
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
  