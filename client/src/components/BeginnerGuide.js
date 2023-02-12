import React from "react";
import old from "../assets/old.png";
import tax from "../assets/tax.png";
import shield from "../assets/shield.png";
import govt from "../assets/govt.jpeg";
import { Link } from "react-router-dom";

const BeginnerGuide = () => {
  return (
    <div className="bg-green-200 border-2 h-40 rounded-3xl m-10">
      <div className="row">
        <div className="grid grid-cols-4 gap-2">
          <div className="mt-14">
            <img src={shield} className="w-10 h-10 ml-40" />
            <div>Highly Safe Bond</div>
          </div>
          <div className="mt-14">
            <img src={old} className="w-10 h-10 ml-40" />
            <div>Bonds For senior Citizen</div>
          </div>
          <div className="mt-14">
            <img src={tax} className="w-10 h-10 ml-40" />
            <div>Tax Free Bond</div>
          </div>
          <div className="mt-14">
            <img src={govt} className="w-10 h-10 ml-40" />
            <div>State Govt Bonds</div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <Link to='/begineer-guide' ><button type="button" class="bg-blue-300  w-36 rounded-3xl h-10 float-right ">Learn More</button></Link>
    </div>
    </div>
  );
};

export default BeginnerGuide;
