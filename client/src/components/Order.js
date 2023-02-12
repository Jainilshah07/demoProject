import React from "react";
const Order = () => {
  return (
    <>
      <div className="row border-2 rounded-lg overflow-hidden shadow-lg  mt-5 mb-5 h-20 bg-gradient-to-br from-pink-200  via-purple-300 to-blue-200">
        <div className="grid grid-cols-11 mt-3">
          <div>Symbol</div>
          <div>series</div>
          <div>Bond Type</div>
          <div>Coupon Rate</div>
          <div>Face Value</div>
          <div>LTP</div>
          <div>%CHNG</div>
          <div>Volume</div>
          <div>Value</div>
          <div>Credit Rating</div>
          <div>Maturity Date</div>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="button"
          class="bg-blue-200  w-36 rounded-3xl h-10 float-right mr-8">
          Buy
        </button>
      </div>
      
    </>
  );
};

export default Order;
