import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const PaymentPage = () => {
  const [cart, setCart] = useState([]);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => {
    setPaid(true);
    localStorage.removeItem("cart");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 md:px-10">

      {/* Confetti */}
      {paid && <Confetti numberOfPieces={500} recycle={false} />}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* PAYMENT METHODS */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow">

          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Select Payment Method
          </h2>

          <div className="space-y-4">

            <label className="border p-4 rounded-lg flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" />
              <span>UPI (Google Pay / PhonePe / Paytm)</span>
            </label>

            <label className="border p-4 rounded-lg flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Credit / Debit Card</span>
            </label>

            <label className="border p-4 rounded-lg flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Net Banking</span>
            </label>

            <label className="border p-4 rounded-lg flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>

          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white py-3 md:py-4 rounded-lg font-semibold text-lg"
          >
            Pay ₹{total}
          </button>

        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow">

          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center">

                <div>
                  <p className="font-semibold text-sm md:text-base">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Size: {item.size}
                  </p>
                </div>

                <p className="font-semibold">
                  ₹{item.price}
                </p>

              </div>
            ))}

          </div>

          <div className="border-t mt-6 pt-4 space-y-2">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-3">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS MODAL */}
      {paid && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 px-4">

          <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl text-center max-w-md w-full">

            <h1 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
              🎉 Payment Successful!
            </h1>

            <p className="text-gray-600 mb-6">
              Your order has been placed successfully.
            </p>

            <button
              onClick={() => window.location.href = "/"}
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default PaymentPage;