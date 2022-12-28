import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container , Box} from '@mui/material';
import d from '../Photos/d.svg'
import mind from '../Photos/1.svg'
import Tool from '../Photos/Tool.svg'

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
    return (
      <Container sx={{marginTop:'3%'}}>
      <Box>
      <Typography component='a' variant="h4" href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>Launch your first DSP campaign</Typography>
        <Slider {...settings}>
          <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={d}
        />
        <CardContent>
          <Typography component='a' variant="h5" href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Launch your first campaign in the Amazon DSP
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={mind}
        />
        <CardContent>
          <Typography component='a' variant="h5" href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Get started in the Amazon DSP
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Tool}
        />
        <CardContent>
          <Typography  component='a' variant="h5" href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Create a line item in the Amazon DSP
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
        </Slider>
        </Box>
      </Container>
    );
  }
}