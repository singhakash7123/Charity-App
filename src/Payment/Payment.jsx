import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import Scrolltotop from '../component/ScrollToTop';

/* ================= CLOTH DONATION ================= */
const ClothDonation = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-1">👕 Cloth Donation</h3>
      <p className="text-sm text-gray-500 mb-5">
        Donate clean & usable clothes to help people in need.
      </p>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Cloth Category</label>
          <select className="w-full mt-1 bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none">
            <option>Men</option>
            <option>Women</option>
            <option>Children</option>
            <option>Winter Wear</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Number of Clothes</label>
          <input
            type="number"
            placeholder="e.g. 5"
            className="w-full mt-1 bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Pickup Address</label>
          <textarea
            rows="3"
            placeholder="Enter pickup address"
            className="w-full mt-1 bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Pickup Date</label>
          <input
            type="date"
            className="w-full mt-1 bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none"
          />
        </div>
      </div>

      <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition">
        Schedule Cloth Pickup
      </button>
    </div>
  );
};

/* ================= MONEY DONATION ================= */
const Payment = () => {
  const [donated, setDonated] = useState(0);
  const [paytype, setPaytype] = useState('');
  const amount = [25, 50, 100, 250, 500, 1000];
  const paymenttype = ['One Time', 'Monthly'];

  const createOrder = async (amount) => {
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    return data.order;
  };

  const handleDonate = async () => {
    if (!donated) return alert("Select an amount");
    const order = await createOrder(donated);
    if (!order) return;

    const options = {
      key: "rzp_test_RgUja1rFjsxYfL",
      amount: order.amount,
      currency: "INR",
      name: "Charity Donation",
      description: "Donation Payment",
      order_id: order.id,
      handler: () => alert("Payment Successful ❤️"),
      theme: { color: "#6366f1" },
    };

    new window.Razorpay(options).open();
  };

  return (
    <section className="min-h-screen bg-gradient-to-tr from-blue-100 to-indigo-200 py-10">
      <Scrolltotop />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT */}
        <ClothDonation />

        {/* RIGHT */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <span className="text-3xl p-4 rounded-full text-white bg-gradient-to-br from-indigo-500 to-purple-600">
              <FaHeart />
            </span>
            <h3 className="mt-4 text-xl font-semibold">Money Donation</h3>
            <p className="text-sm text-gray-500 text-center">
              Your contribution helps us create lasting impact
            </p>
          </div>

          {/* Donation Type */}
          <div className="mb-5">
            <p className="text-sm font-medium mb-2">Donation Type</p>
            <div className="flex gap-3">
              {paymenttype.map((type) => (
                <button
                  key={type}
                  onClick={() => setPaytype(type)}
                  className={`flex-1 py-2 rounded-xl border font-medium text-sm transition
                    ${paytype === type
                      ? 'bg-indigo-500 text-white border-indigo-500'
                      : 'bg-gray-100 border-gray-200'}
                  `}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className="mb-5">
            <p className="text-sm font-medium mb-2">Select Amount</p>
            <div className="flex flex-wrap gap-3">
              {amount.map((item) => (
                <button
                  key={item}
                  onClick={() => setDonated(item)}
                  className="w-[30%] py-2 text-sm rounded-lg bg-gray-100 hover:bg-indigo-500 hover:text-white transition"
                >
                  ₹{item}
                </button>
              ))}
            </div>

            <input
              type="number"
              value={donated}
              onChange={(e) => setDonated(Number(e.target.value))}
              placeholder="Enter custom amount"
              className="w-full mt-3 bg-gray-100 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Total */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
            <div className="flex justify-between items-center">
              <span>Total Donation</span>
              <span className="text-xl font-semibold">₹{donated}</span>
            </div>

            <button
              onClick={handleDonate}
              className="w-full mt-4 bg-white text-indigo-600 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Complete Donation
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        By completing this donation you agree to our terms & conditions
      </p>
    </section>
  );
};

export default Payment;
