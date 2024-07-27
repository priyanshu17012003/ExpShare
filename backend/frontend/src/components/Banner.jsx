import React from 'react'
import banner from '../assets/banner.jpg'

function Banner() {
  return (
    <>
    <div className='mx-auto max-w-screen-2xl container px-5 md:px-5 flex flex-col md:flex-row'>
        <div className='mt-12 w-full md:w-1/2 flex flex-col order-2 md:order-1'>
            <center className='space-y-8'>
            <h1 className='text-4xl font-semibold'>
                Share & Gain
                <span className='text-4xl font-bold text-green-500'> Expereince</span>
            </h1>
            <a className="btn bg-green-500 text-white rounded-md hover:bg-base-100 hover:text-black hover:border-green-500">About Us</a>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos illum, ab rem dolor, suscipit, beatae hic iusto sapiente nihil sunt fugit. Eaque dolor totam eveniet officiis veritatis, repellendus ea!
            </p>
            </center>
        </div>
        <div className='w-full mt-9 md:w-1/2 order-1 md:order-2'>
        <center>
        <img src={banner} className='h-80 w-100'></img>
        </center>
        </div>
    </div>
    </>
  )
}

export default Banner