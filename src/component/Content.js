import React, { useEffect, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Typography from '@mui/material/Typography';
import smile from '../image/smile.PNG';
import Button from "./Button";
import { options, fetchData } from '../util/fetchData';


const Content = () => {
    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState([]);


     useEffect(() => {
        const fetchMemesData = async () => {
            let memesData = [];
            memesData = await fetchData('https://programming-memes-images.p.rapidapi.com/v1/memes', options);
            
            setImages(memesData);
        
        };
    
        fetchMemesData();
     }, []);

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
            <img src={smile} alt="background" className='bgsmile' />
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
              <div key={img.image} className="slide">
                <img src={img.image} alt="images" />
                <div>
                    <Button image={img.image} />
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
