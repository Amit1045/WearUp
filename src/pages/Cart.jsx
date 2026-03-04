import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // REMOVE ITEM
  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">Your Bag</h1>

      {cart.length === 0 ? (
        <p>Your bag is empty</p>
      ) : (
        <div className="space-y-6">

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 border p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />

              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p>Size: {item.size}</p>
                <p>Qty: {item.qty}</p>
              </div>

              <div className="font-bold">₹{item.price}</div>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>

            </div>
          ))}

          <div className="border-t pt-6 flex justify-between items-center">

            <h2 className="text-xl font-semibold">
              Total: ₹{total}
            </h2>

            <button
              onClick={() => navigate("/pay")}
              className="bg-yellow-500 px-6 py-3 rounded-lg font-bold"
            >
              Proceed to Payment
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;