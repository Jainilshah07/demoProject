import React from 'react';
import bg3 from '../assets/sponsorImg.svg';

const About = () => {
  return (
    <>
    <div className="pb-4">
        <h1 className='mt-10 font-semibold text-3xl'>About Us</h1>
    <div className='row'>
        <div className='grid grid-cols-3 mt-20'>
            <div className='col-span-1'>
                <div className='row'>
                <div className='my-8'>
                <h1 className='font-bold'>What we do</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore.</p>
            </div>

            <div>
                <h1 className='font-bold'>History & Milestones</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore.</p>
            </div>
                </div>
            </div>

            <div className='col-span-1'>
                <div className='row'>
                <div className='my-8'>
                <h1 className='font-bold'>Mission</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                sed do eiusmod tempor incididunt ut labore.</p>
            </div>

            <div>
                <h1 className='font-bold'>Vision</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore.</p>
            </div>
                </div>
            </div>
            

            <div className='row-span-1'>
                <img src={bg3}/>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}
export default About;