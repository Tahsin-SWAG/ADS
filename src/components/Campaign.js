import React, { Component } from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/system';
import Camp1 from "../Photos/camp1.svg";
import Camp2 from "../Photos/camp2.svg";
import Camp3 from "../Photos/camp3.svg";
import Tool from "../Photos/Tool.svg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1040,
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
    return (
      <Container sx={{marginTop:'3%'}}>
      <Typography variant="h4" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>Campaign measurement tools</Typography>
        <Slider {...settings}>
       <div>
       <Card sx={{height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Camp1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          Gain insights with Amazon Attribution reporting
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
    <Card sx={{height:'300px'}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          image={Camp2}   
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          Measure your campaign’s performance
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Camp3}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          Measure campaigns with Amazon Attribution
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Tool}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Measure campaigns with Amazon Attribution
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
        </Slider>
        </Container>
    );
  }
}