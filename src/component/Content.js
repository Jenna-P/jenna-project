import React, { useEffect, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Typography from '@mui/material/Typography';
import smile from '../image/smile.PNG';
import Button from "./Button";


const Content = () => {
    const [current, setCurrent] = useState(0);

    const images = [
          "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        ];

        function nextSlide() {
            setCurrent(current === images.length - 1 ? 0 : current + 1);
            console.log(images[current]);
          }
        
          function prevSlide() {
            setCurrent(current === 0 ? images.length - 1 : current - 1);
          }
 
  return (
    <div className='content'>
        <div className='left-content'>
            <div className='text-content'>
                <h1>Fun Programming memes</h1>
                <hr />
            </div>
            <img src={smile} alt="bg image" className='bgsmile' />
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '170px' }}>
            LAUGH
            </Typography>
        </div>
        <div className='slider'>
            <div className='arrow' onClick={prevSlide}>
                <ArrowCircleLeftIcon  fontSize="large"/>
            </div>
            {images.map(
          (img, index) => 
            current === index && (
              <div key={img} className="slide">
                <img src={img} alt="images" />
                <div>
                    <Button img={img} />
                </div>
              </div>
                )
            )}
            <div className='arrow' onClick={nextSlide}>
                <ArrowCircleRightIcon fontSize="large" />
            </div>
        </div>
    </div>
  )
}

export default Content
