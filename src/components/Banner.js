/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Picture_1 from "../Photos/picture_1.png";
import Picture_2 from "../Photos/picture_2.png";
import Picture_3 from "../Photos/picture_3.png";
import Picture_4 from "../Photos/picture_4.png";
import { Box } from "@mui/system";

export default class Responsive extends Component {
  render() {
    const array = [Picture_1,Picture_2,Picture_3,Picture_4]
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows:true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows:true

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true

          }
        }
      ]
    };
    return (
     <Box sx={{width:{xs:'97%' } , margin:{xs:'' , md:"auto"}}}>
     <Slider {...settings}>   
      {array.map((item,index)=>{
        return( 
          <img src={item}style={{width:'100%'}}/>
        )
      }
      )}
        </Slider>
     </Box>
    );
  }
}