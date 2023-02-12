import React from "react";

function Book() {
  return (
    <div className="row ">
      <div className="grid grid-cols-2 bg-gradient-to-br from-pink-200  via-purple-300 to-blue-200">
        {/* column1 */}
        <div className="w-[27rem] ml-64 ">
          <form className="mt-3 border-2 rounded-lg overflow-hidden shadow-md h-72 bg-white shadow-blue-300 border-blue-900">
            <div className="mb-2 flex mt-3">
              <label
                for="Fullname"
                className="block text-sm text-black font-bold text-left ml-10 "
              >
                Buy QTY
              </label>
              <input
                type="text"
                name="Quantity"
                className="block w-72 ml-9 px-4 py-2  text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-5"
              />
            </div>
            <div className="mb-2 flex">
              <label
                for="Fullname"
                className="block text-sm text-black font-bold text-left ml-10 "
              >
                BID
              </label>
              <input
                type="text"
                name="BID"
                className="block w-72 ml-14 px-4 py-2 mb-5 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 flex">
              <label
                for="Fullname"
                className="block text-sm text-black font-bold text-left ml-10 "
              >
                Ask
              </label>
              <input
                type="text"
                name="Ask"
                className="block w-72 ml-14 px-4 py-2 mb-5 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 flex">
              <label
                for="Fullname"
                className="block text-sm text-black font-bold text-left ml-10 "
              >
                Sell QTY
              </label>
              <input
                type="text"
                name="Quantity"
                className="block w-72 ml-9 px-4 py-2 mb-5 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </form>
        </div>
        {/* row1col2 */}
        <div className="mt-4 border-2 rounded-lg overflow-hidden shadow-md h-72 w-[27rem] bg-white shadow-blue-300 border-blue-900">
          <p className="font-bold">Trade Information</p>
          <div className="row">
            <div className="grid grid-cols-2">
              <div>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3 "
                >
                  Traded Volume(shares)
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Traded Value($Lakhs)
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Coupon Rate
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  VWAP
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Adjusted Price*
                </label>
              </div>

              <div>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  31,777
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  396.35
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  8.75
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  1239.47
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* column2 */}

        <div className="mt-3 border-2 rounded-lg overflow-hidden shadow-md h-72 w-[27rem] ml-64 bg-white shadow-blue-300 border-blue-900">
          <p className="font-bold">Price Information</p>
          <div className="row">
            <div className="grid grid-cols-2">
              <div>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  52 Week High (28-Jan-2022)
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  52 Week Low (21-Apr-2022)
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  52 Week Low (21-Apr-2022)
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Upper Band
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Lower Band
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Price Band
                </label>
              </div>

              <div>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  1,434.89
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  1,185.00
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  1,185.00
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  1,490.55
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  993.70
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* colum2row2 */}

        <div className="mt-3 border-2 rounded-lg overflow-hidden shadow-md h-72 w-[27rem] bg-white mb-6 shadow-blue-300 border-blue-900">
          <p className="font-bold">Value at risk</p>
          <div className="row">
            <div className="grid grid-cols-2">
              <div className=" ">
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Security VaR
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Index VaR
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  VaR Margin
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Extreme Loss Rate
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Adhoc Margin
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-black font-bold text-left m-3"
                >
                  Applicable Margin Rate
                </label>
              </div>

              <div>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  -
                </label>
                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  -
                </label>

                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  10
                </label>

                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  -
                </label>

                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  -
                </label>

                <label
                  for="Fullname"
                  className="block text-sm text-gray-400 font-semibold text-left m-3"
                >
                  10
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
    // </div>
  );
}

export default Book;
