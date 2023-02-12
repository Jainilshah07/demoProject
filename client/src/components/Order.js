import React from "react";
const Order = () => {
  return (
    <>
      <div className="row border-2 rounded-lg overflow-hidden shadow-lg  mt-5 mb-5 h-20 bg-gradient-to-br from-pink-200  via-purple-300 to-blue-200">
        <div className="row">
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
          <div className="row">
            <div className="grid grid-cols-11 mt-3">
              <div>NHAI</div>
              <div>N6</div>
              <div>Regular</div>
              <div>8.75</div>
              <div>1000.00</div>
              <div>1242.00</div>
              <div>-0.01</div>
              <div>31977</div>
              <div>39,634,532.19</div>
              <div>CRISIL AAA STABLE</div>
              <div>5-Feb-29</div>
            </div>
          </div>
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
