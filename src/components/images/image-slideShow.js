"use client";
import React, { act, useEffect, useState } from 'react'
import slide1 from '../../../public/bareque.jpg'
import slide2 from '../../../public/biryani.jpg'
import slide3 from '../../../public/fruit.webp'
import slide4 from '../../../public/snaksPlater.webp'
import slide5 from '../../../public/plater1.jpg'
import slide6 from '../../../public/vegPlater.jpg'
import Image from 'next/image'
import './images.css'

const imagesData = [
    {
        image: slide1, alt: 'image1'
    },
    {
        image: slide2, alt: 'image1'
    },
    {
        image: slide3, alt: 'image1'
    },
    {
        image: slide4, alt: 'image1'
    },
    {
        image: slide5, alt: 'image1'
    },
    {
        image: slide6, alt: 'image1'
    },

]



const ImageSlide = () => {
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(()=>{
    setCurrentImageIndex((prevIndex)=> prevIndex < imagesData.length -1 ? prevIndex + 1 : 0);
  },5000)

  return ()=> clearInterval(interval)
}, [])


    return (
        <div className='slideshow'>
            {
                imagesData.map((item, index)=>(
                    <Image
                    className={index === currentImageIndex ? "active" : ''}
                    key={index}
                    src={item.image}
                    alt={item.alt}
                    priority
                    />
                ))
            }
        </div>
    )
}

export default ImageSlide