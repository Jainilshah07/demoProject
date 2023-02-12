import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/csvjson.json";
import Order from "./Order";

const Collection = () => {
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
    <div className="grid grid-cols-3 bg-gradient-to-br from-pink-400 via-purple-300 to-blue-400">
      {myData.map((data, index) => {
        if (index < 9) {
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
                        <p className="block text-sm text-black">{data.BOND_TYPE} </p>
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
                          Coupon Rate
                        </label>
                        <p className="block text-sm  text-black ">8.75</p>
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
                        <p className="block text-sm  text-black">1000.00</p>
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
  );
};

export default Collection;
