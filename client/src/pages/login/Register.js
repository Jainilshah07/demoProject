import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../axios";

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        FirstName:"",
        LastName:"",
        Email: "",
        MobileNo:"",
        AadharNum:"",
        Password:"",
        CPassword:"",
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
        const user = { FirstName:input.FirstName, LastName:input.LastName,  Email: input.Email, Password: input.Password }
        try {
          if (user) {
            const res = await axios.post("/Register", user);
            console.log(res.data);
            navigate("/login")
          }
        } catch (error) {
          console.log("error form content", error)
        }
        setInput({
            FirstName:"",LastName:"",Email: "",AadharNum:"",MobileNo:"",Password: "",CPassword: "",
        });
      };

    return (
        <div className="relative flex flex-col justify-center min-h-fit overflow-hidden mt-4">
            <div className="w-[27rem] p-6 m-auto bg-sky-900 rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-black lg:max-w-xl">
                <h1 className="text-2xl font-semibold text-center text-gray-400 ">
                    Register
                </h1>
                <form className="mt-1">
                    <div className="mb-2">
                        <label
                            for="FirstName"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10 "
                        >
                            First Name
                        </label>
                        <input
                            type="text" name="FirstName" value={input.FirstName}  onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                   
                    <div className="mb-2">
                        <label
                            for="Email" 
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Email
                        </label>
                        <input
                            type="Email" name="Email" value={input.Email} onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="MobileNo"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Mobile Number
                        </label>
                        <input
                            type="text" name="MobileNo" value={input.MobileNo}  onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="AadharNum"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Aadhar Card Number
                        </label>
                        <input
                            type="text" name="AadharNum" value={input.AadharNum} onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="AadharNum"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Password
                        </label>
                        <input
                            type="text" name="Password" value={input.Password} onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="CPassword"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="text" name="CPassword" value={input.CPassword} onChange={InputHandler}
                            className="block w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-4">
                    <button type="button" class="bg-gradient-to-r from-green-400 to-blue-300  w-36 rounded-3xl h-10">Register</button>
                    </div>
                </form>

                <p className="mt-4 text-xs font-light text-center text-gray-400 ">
                    Already have an account?
                    <Link to="/login" className="font-medium text-indigo-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;