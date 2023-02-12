import React from 'react';
import Cards from './Cards';
import Card1 from '../components/Card1';
// import Homestyles from '../pages/Homestyles.css';
import bg from '../assets/hero-bg.jpg';
import About from './About';
import Beginner from './Beginner';
const Home = () => {
    return (
        <>
            <div className='styles h-screen overflow-hidden opacity-70' style={{ backgroundImage: `url(${bg})`, }}>
                <h1 className='mt-56 text-white text-4xl font-[Montserrat]'>Welcome To BondHeaven.</h1>
                <p className="mt-5 text-white">Bond trading is a way for investors to diversify their portfolios and earn a <br/>steady stream of income through the interest payments. Bond prices can fluctuate <br/>based on a variety of factors, such as changes in interest rates, economic conditions, <br/>and the issuer's creditworthiness, making bonds a potentially profitable investment for traders. </p>
            </div>
            <About/>
            <Beginner />
            <div>
                <h1 className='mt-20 font-semibold text-3xl'>Bonds Collection</h1>
            <div className="row px-48 mt-20 ">
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 mt-5'><Cards/></div>
                    <div className='col-span-1'><Card1/></div>
                    <div className='col-span-1 mt-5'><Cards/></div>

                </div>
            </div>
            <div className="mr-12">
                <button type="button" class="bg-blue-300  w-36 rounded-3xl h-10 float-right ">Know More</button>
            </div>
            </div> 
        </>
    );
};
export default Home;
