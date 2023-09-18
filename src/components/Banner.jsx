import React from 'react'
import Button from './elements/button'
import pizzaPicture from '../assets/images/IMG_0345.jpg'

function Banner() {
  return (
    <div className='w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between'>
        <div className='banner-description w-full md:w-1/2 p-3'>
            <h2 className='mb-6 text-4xl text-white font-bold'>
                Food Ordering Made Easy
            </h2>
            <p className='font-semibold text-lg text-red-600 py-2'>
                Order your favorite food from your Winner's Circle!
            </p>
            <div className='btn-container'>
                <Button>Order Now</Button>
                <a href="/menu" className='text-yellow-400 hover:text-yellow-500 font-bold px-3'>
                    See Menu
                </a>
            </div>
        </div>
        <div className='banner-image w-full md:1/2 p-3 flex justify-end'>
            <img src={pizzaPicture} alt="banner" className='max-h-80 ' />
        </div>
    </div>
  )
}

export default Banner