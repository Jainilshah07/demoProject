import React from 'react';

export default function Cards() {
  return (
    <>
        <div className=" w-72 font-['Montserrat]">
        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm h-96 ">
          <div className="flex">
            <img src="logo512.png" alt="" className="w-10 h-10"/>
            <p className="ml-5 mt-3">name of company</p>
          </div>

          <div className='row'>
            <div className='grid grid-cols-2 mt-5'>
             <div>
              <label for="symbol" className="block text-sm font-semibold text-gray-400  ">Symbol</label>
              <p  className="block text-sm  text-black  ">NHAI</p>
              </div>
              <div>
              <label for="series" className="block text-sm font-semibold text-gray-400  ">Series</label>
              <p  className="block text-sm  text-black ">N6</p>
              </div>

            </div>
          </div>

          <div className='row mt-3'>
            <div className='grid grid-cols-2 mt-5'>
            <div>
              <label for="bondtype" className="block text-sm font-semibold text-gray-400  ">Bond Type</label>
              <p  className="block text-sm  text-black  ">Regular</p>
              </div>
              <div>
              <label for="couponrate" className="block text-sm font-semibold text-gray-400  ">Coupon Rate</label>
              <p  className="block text-sm  text-black ">8.75</p>
              </div>
            </div>
          </div>


          <div className='row mt-3'>
            <div className='grid grid-cols-2 mt-5'>
                <div>
              <label for="facevalue" className="block text-sm font-semibold text-gray-400 ">Face Value</label>
              <p  className="block text-sm  text-black">1000.00</p>
              </div>
                <button type="button" class="bg-gradient-to-r from-green-400 to-blue-300  w-24 rounded-3xl h-10 ml-5">Know More</button>
            </div> 
          </div>
        </div>
      </div> 
    </>
    );
            
}