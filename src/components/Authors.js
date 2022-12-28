import React, { Component } from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/system";
import autho1 from "../Photos/autho1.svg";
import autho2 from "../Photos/autho2.svg";
import autho3 from "../Photos/autho3.svg";
import two from "../Photos/2.svg";
import Seven from "../Photos/7.svg";
import four from "../Photos/4.svg";

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
        <Typography variant="h4" component='a' href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>Sponsored ads for KDP authors</Typography>
        <Slider {...settings}>
          <div>
          <Card sx={{ maxWidth: 345 , height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={autho1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component='a' href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Target your sponsored ads campaign for Authors
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 345 , height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={autho2}
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  component='a' href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Interpret your sponsored ads performance for Authors
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 345 , height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={autho3}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component='a' href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Sponsored ads for Authors
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 345 , height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={two}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component='a' href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Set up a sponsored ads campaign for Authors
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 345, height:'300px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Seven}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component='a' href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Learn about sponsored ad types for Authors
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 345 , height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={four}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component='a' href='#' sx={{textDecoration:'none' , color:'black' , ":hover":{textDecoration:'underline'}}}>
          Optimize your sponsored ads campaign for Authors
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