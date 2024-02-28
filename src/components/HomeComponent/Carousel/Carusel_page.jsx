import React from 'react'
import Mycard from './Mycard'
import './myCard.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carusel_page = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    // let box = document.querySelector('.product-container')
    // const btnpressprev=()=>{
    //       let width = box.clientWidth
    //       box.scrollLeft = box.scrollLeft - width
    //       console.log(width);
    // }
    // const btnpressnext=()=>{
    //     let width = box.clientWidth
    //     box.scrollLeft = box.scrollLeft + width
    //     console.log(width);
    // }
    const cards = [];
    for (let i = 0; i < 12; i++) {
        cards.push(<Mycard key={i} cardid={i + 1} />);
    }
  return (
    <>
        <div className="carusel_page">
        <Carousel responsive={responsive}>
           {cards}
 
</Carousel>;
        {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide cardno={1} />
      <SwiperSlide cardno={1} />
      <SwiperSlide cardno={1} />
      <SwiperSlide cardno={1} />
    
    </Swiper> */}
            {/* <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
            <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>

            <div className="product-container">
                <Mycard cardid={1}/>
                <Mycard cardid={2}/>
                <Mycard cardid={3}/>
                <Mycard cardid={4}/>
                <Mycard cardid={5}/>
                <Mycard cardid={6}/>
                <Mycard cardid={7}/>
                <Mycard cardid={8}/>
            </div> */}
        </div>
    </>
  )
}

export default Carusel_page