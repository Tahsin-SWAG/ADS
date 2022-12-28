/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Picture_1 from "../Photos/picture_1.png";
import Picture_2 from "../Photos/picture_2.png";
import Picture_3 from "../Photos/picture_3.png";
import Picture_4 from "../Photos/picture_4.png";
import { Container } from "@mui/material";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
    return (
     
        <Slider {...settings}>
          <div>
            <img src={Picture_1} style={{width:'100%'}}/>
          </div>
          <div>
          <img src={Picture_2} style={{width:'100%'}}/>
          </div>
          <div>
          <img src={Picture_3} style={{width:'100%'}}/>
          </div>
          <div>
          <img src={Picture_4} style={{width:'100%'}}/>
          </div>
        </Slider>
     
    );
  }
}