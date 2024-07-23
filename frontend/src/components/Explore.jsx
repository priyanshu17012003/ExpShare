import React, { useEffect, useState } from 'react'
import Card from './Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

function Explore() {

  const [apiList,setapiList]=useState([]);
  useEffect(()=>{
    
    const getList=async()=>{

      const res=await axios.get("/api/list");
      setapiList(res.data);

    };

    getList();
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const internships = apiList.filter((item) => item.type === "Internship");

  return (
    <>
    <div className='mx-auto max-w-screen-2xl container px-5 mt-10 md:px-5 md:mt-8 '>

      <center>
        <h2 className='font-bold text-xl text-green-500'>Explore the journey of others</h2>
      </center> 
      <Slider {...settings}>
        {
          internships.map((item) => (
            <div key={item._id}>
              <Card item={item} />
            </div>
          ))
        }
      </Slider>
    </div>
    </>
  )
}

export default Explore;
