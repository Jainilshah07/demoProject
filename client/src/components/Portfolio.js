import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/csvjson.json";
import BondPieChart from "./BondPieChart";

function Portfolio() {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const handleSubmit = () => {
    console.log(data.id);
    //navigate("/order");
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
    <div className="row border-2 rounded-lg overflow-hidden shadow-lg  py-5 mb-5 bg-gradient-to-br from-pink-400 via-purple-200 to-white">
      <div className="row">
        <table class="table-auto mx-auto font-bold border-spacing-x-1 border-separate my-2 ">
          <thead>
            <tr>
              <th className=" border border-slate-600 mx-2 md:px-8">Bond Name</th>
              <th className=" border border-slate-600 mx-2 md:px-8">Value</th>
              <th className=" border border-slate-600 mx-2 md:px-8">QTY</th>
              <th className=" border border-slate-600 mx-2 md:px-8">Series</th>
              <th className=" border border-slate-600 mx-2 md:px-8">LTP</th>
            </tr>
          </thead>

          {myData.map((data, index) => {
            if (index < 6) {
              return (
                <>
                  <tr className="my-2">
                    <td className="border border-slate-600 mx-2 md:px-8">{data.SYMBOL}</td>
                    <td className="border border-slate-600 mx-2 md:px-8">{data.VALUE}</td>
                    <td className="border border-slate-600 mx-2 md:px-8">Regular</td>
                    <td className="border border-slate-600 mx-2 md:px-8">{data.SERIES}</td>
                    <td className="border border-slate-600 mx-2 md:px-8">{data.LTP}</td>
                  </tr>
                </>
              );
            }
          })}
        </table>
      </div>

      <div className="row min-w-full pb-10">
        <div className="mx-auto">
          <BondPieChart />
        </div>
        
      </div>
    </div>
  );
}

export default Portfolio;
