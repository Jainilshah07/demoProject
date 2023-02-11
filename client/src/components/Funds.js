import React from "react";
import upi from "../assets/NSElog.jpg";

const Funds = () => {
  return (
    <div className="grid grid-cols-3 mb-96">
      <div className="col-span-1"></div>
      <div className="col-span-2">
        <div className="row">
          <div className="bg-gray-200 my-auto p-5 ml-6 mr-3 font-medium rounded-md border-0 border-gray-400">
            <p>Total Amount</p>
            <p>368</p>
            <p>be safe</p>

          </div>
        </div>

        <div className="row">
          <div className="grid grid-cols-5">
            <div className="col-span-1"></div>
            <div className="col-span-2">
              <div className="flex">
                <p className="ml-16 my-auto mr-3 align-middle">
                  Instant,Zero cost Fund Transfer with
                </p>
                <img src={upi} alt="" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex">
                <button className="bg-green-700 my-auto p-3 ml-6 mr-3 font-medium rounded-md border-0 border-green-900">
                  Add Funds
                </button>
                <button className="bg-blue-700 my-auto p-3 mx-3 font-medium rounded-md border-0 border-blue-900">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
