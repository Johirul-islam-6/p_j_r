import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import './Swiper_style.css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from 'react-router-dom';


const Project_Lisht = () => {

    const [imgss, setImg] = useState()
    const [loding, setLoding] = useState(true)


    useEffect(() => {
        fetch('https://web-technology-server-site.vercel.app/simple')
            .then(res => res.json())
            .then(data => {
                setImg(data)
                setLoding(false)
            })

    }, [])

    if(loding){
      return <>
  <div class="center">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
      </>
    }

    return (
        <>
            <>

                {/* <h1 className='text-white text-4xl text-center font pt-10 animation_p uppercase'>My latest Projects</h1>
                <p className='text-center pt-3 text-[18px]'>I have been complete 10+ projects last 1 month . Here I'm showing <br /> some best project . If you want to see others project just go to <br /> my Github repository .</p> */}

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {imgss?.map(product => <>
                        <SwiperSlide>
                            <div key={product?.id} className="card z-50">
                                <h2 className="text-center py-5 text-[16px] md:text-[20px]">Site Name : <span className='text-amber-700'>{product?.name}</span></h2>
                                <figure><img className='slider_Image' src={product?.img} alt="product image" /></figure>
                                <div className="card-body ">

                                    <Link to={`/simple-project/${product?.id}`} className='btn btn-primary'>Details</Link>

                                    <div className="card-actions justify-end">

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                    )}

                    <SwiperSlide>
                        <div className="w-[100%] flex justify-center  md:h-[90vh] ">
                            <Link to={`/project`} className="btn btn-primary flex mt-[70%] md:mt-[50%]">More Porjects..</Link>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </>
         


        </>
    );
};

export default Project_Lisht;