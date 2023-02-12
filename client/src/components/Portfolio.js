import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/csvjson.json";

function Portfolio() {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const handleSubmit = () => {
    console.log(data.id)
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
    <div className='row border-2 rounded-lg overflow-hidden shadow-lg  mt-5 mb-5 bg-gradient-to-br from-pink-400 via-purple-300 to-blue-400 '>

      <div className="row">
        <div className='grid grid-cols-5 font-bold my-2'>
          <div>Bond Name</div>
          <div>Value</div>
          <div>QTY</div>
          <div>Series</div>
          <div>LTP</div>
        </div>
        <hr />
      </div>
      {myData.map((data, index) => {
        if (index < 6) {
          return (
            <div className="row">
              <div className='grid grid-cols-5 my-1 font-medium'>
                <div>{data.SYMBOL}</div>
                <div>{data.VALUE}</div>
                <div>Regular</div>
                <div>{data.SERIES}</div>
                <div>{data.LTP}</div>
              </div>
            </div>
          )
        }
      })}
    </div>
  );
}

export default Portfolio;