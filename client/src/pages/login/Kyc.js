import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Kyc = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        MobileNo:"",
        AadharNum:"",
        otp:""
    });

    const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setInput({
          ...input,
          [name]: value,
        });
      };

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const user = { MobileNo: input.MobileNo, AadharNum: input.AadharNum }
        console.log(user);
        try {
          if (user) {
            const res = await axios.post("http://localhost:8000/api/User/validate-user", user);
            console.log(res.data);
            // navigate("/")
          }
        } catch (error) {
          console.log("error form content", error)
        }
        setInput({
            // MobileNo:"",AadharNum:""
        });
      }; 
      
      const SubmitOtp = async (e) => {
        e.preventDefault();
        const user = { otp: input.otp }
        console.log(user);
        try {
          if (user) {
            console.log("Frontend");
            const res = await axios.post("http://localhost:8000/api/User/validate-otp", user);
            console.log(res.data);
            navigate("/register")
          }
        } catch (error) {
          console.log("error form content", error)
        }
        setInput({
            MobileNo:"",AadharNum:"",otp:""
        });
      };  
  return (
    <div>
      <div className="relative bg-gradient-to-tr from-pink-200 to-blue-200 flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-[27rem] p-6 m-auto bg-sky-900 rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-black lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-400 ">
                  Validate your KYC
                </h1>
                <form className="mt-6">
                    <div className="mb-2"></div>
                    <div className="mb-2">
                        <label
                            for="MobileNo" 
                            className="block text-sm font-semibold text-gray-400 text-left ml-10">
                            Mobile Number
                        </label>
                        <input
                            type="number" name="MobileNo" value={input.MobileNo} onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="AadharNum"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Aadhar Number
                        </label>
                        <input
                            type="text" name="AadharNum" value={input.AadharNum} onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                    <button onClick={SubmitHandler} type="button" class="p-2 bg-gradient-to-r from-green-400 to-blue-300  w-36 rounded-3xl h-16 mb-3">Click here to get OTP</button>
                    </div>

                    <div className="mb-2">
                        {/* <label
                            for="otp"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Aadhar Number
                        </label> */}
                        <input
                            type="text" name="otp" value={input.otp} onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    {/* <div className="flex">
                        <Link className='text-md text-gray-400 text-left ml-10 underline'></Link>
                        <input
                            type="text" name="otp" value={input.otp} onChange={InputHandler}
                            className="block w-48 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> */}
                    <div className="mt-6">
                    <button onClick={SubmitOtp} type="button" class="bg-gradient-to-r from-green-400 to-blue-300  w-36 rounded-3xl h-10">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Kyc
