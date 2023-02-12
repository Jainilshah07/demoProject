import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/csvjson.json";
import upi from "../assets/NSElog.jpg";

const Funds = () => {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const handleSubmit = () => {
    console.log(data.id)
    navigate("/order");

  };

  const getApiData = async () => {
    try {
      setMyData(data);
    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 mb-10">
        <div className="col-span-1 mx-6">
          <p className="text-3xl font-semibold my-3 ">Bonds Recomended</p>
        {myData.map((data, index) => {
        if (data.SERIES == 'N2' && index < 10) {
          return (
            <div className="mx-auto bg-white my-3 border-2 border-pink-500 rounded-md" key={data.id}>
              <div className="pt-5 w-72 font-['Montserrat]">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm h-64">
                  <div className="flex">
                    <img src="logo512.png" alt="" className="w-10 h-10" />
                    <p className="ml-5 mt-3">{data.SYMBOL}</p>
                  </div>

                  <div className="row">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="symbol"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          {data.SERIES}
                        </label>
                        <p className="block text-sm text-black"></p>
                      </div>
                      <div>
                        <label
                          for="series"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          Series
                        </label>
                        <p className="block text-sm  text-black ">{data.VALUE} </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="bondtype"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          Bond Type
                        </label>
                        <p className="block text-sm  text-black  ">Regular</p>
                      </div>
                      <div>
                        <label
                          for="couponrate"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          LTP
                        </label>
                        <p className="block text-sm  text-black ">{data.LTP}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="facevalue"
                          className="block text-sm font-semibold text-gray-400 "
                        >
                          Face Value
                        </label>
                        <p className="block text-sm  text-black">10000</p>
                      </div>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        class="bg-gradient-to-r from-green-400 to-blue-300  w-24 rounded-3xl h-10 ml-5"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
            ;
        }

      })}
        </div>
        <div className="col-span-2">
          <div className="row">
            <div className="my-auto p-5 font-medium rounded-md border-2 border-gray-400">
              <p className="font-bold ">Total Amount</p>
              <p className="font-semibold">368</p>
              <p>Be Safe</p>
            </div>
          </div>

          <div className="row border-gray-400  py-3">
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
                  <button className="bg-green-300 my-auto p-3 ml-6 mr-3 font-medium rounded-md border-0 border-green-900">
                    Add Funds
                  </button>
                  <button className="bg-blue-400 my-auto p-3 mx-3 font-medium rounded-md border-0 border-blue-900">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className="row">
            <div className="grid grid-cols-2">
          <div className="mt-4 border-2 rounded-lg overflow-hidden shadow-md h-96 w-[22rem] bg-white shadow-blue-300 border-blue-900">
          

            <div className="row">
            <div className="grid grid-cols-2">
             <div>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Available Margin</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Used Margin</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Available Cash</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Opening Balance</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">PayIn</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Span</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Exposure</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Option Premium</label>
             </div>

             <div>
              <label for="y" className="block text-sm text-black  text-center m-5">225.50</label>
              <label for="y" className="block text-sm text-black text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black text-center m-5">225.50</label>
              <label for="y" className="block text-sm text-black text-center m-5">225.50</label>
              <label for="y" className="block text-sm text-black text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black text-center m-5">0.00</label>
             </div>
</div>
            </div>
          </div>

          <div className="mt-4 border-2 rounded-lg overflow-hidden shadow-md h-96 w-[22rem] bg-white shadow-blue-300 border-blue-900">
          <div className="row">
            <div className="grid grid-cols-2">
             <div>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Available Margin</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Used Margin</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Available Cash</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Opening Balance</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">PayIn</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Span</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Exposure</label>
              <label for="x" className="block text-sm text-black font-bold text-left m-5">Option Premium</label>
             </div>

             <div>
              <label for="y" className="block text-sm text-black  text-center m-5">225.50</label>
              <label for="y" className="block text-sm text-black  text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black  text-center m-5">225.50</label>
              <label for="y" className="block text-sm text-black  text-center m-5">225.50</label>
              <label for="y" className="block text-sm text-black  text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black  text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black  text-center m-5">0.00</label>
              <label for="y" className="block text-sm text-black  text-center m-5">0.00</label>
             </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      
    </>
  );
};

export default Funds;
