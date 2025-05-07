// import React from "react";

// const About =() => {
//     return(
//         <div>

//         </div>
//     )
// }
// export default About






import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.furrypenguin} alt="About Jellycat" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Jellycat Haven — your ultimate destination for whimsical, huggable plush companions! At Jellycat Haven, we celebrate the joy of childhood and the comfort of soft, cuddly friends. Our curated collection includes everything from classic teddy bears and cheeky monkeys to adorable bunnies and happy penguins — all crafted with love, charm, and the softest fabrics.</p>
          <p>We believe in creating more than just toys. Every Jellycat plush is a story waiting to be shared — made with premium materials, thoughtful details, and plenty of heart. Whether you're shopping for a cozy bedtime buddy or the perfect gift for a loved one, our characters are designed to spark imagination and bring smiles to every generation.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to deliver joy through irresistibly soft, safe, and personality-filled plush toys. We’re committed to quality, creativity, and providing a magical experience that brings warmth, wonder, and a touch of whimsy into your everyday life. Because every hug should be unforgettable!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Every plush toy is crafted with premium materials, tested for safety, and made to be durable, huggable, and cherished for years.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy easy online shopping, secure checkout, and fast delivery — bringing joy to your doorstep without hassle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team is always here to assist you with friendly support, quick answers, and a commitment to your satisfaction.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
