import React, { Component } from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/system';
import store1 from "../Photos/store1.svg";
import store2 from "../Photos/store2.svg";
import store3 from "../Photos/store3.svg";
import store4 from "../Photos/store4.svg";
import two from "../Photos/2.svg";

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
       <Typography variant="h4" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>Set up your store</Typography>
        <Slider {...settings}>
          <div>
          <Card sx={{ maxWidth: 345 , height:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={store1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          Leverage Stores for brand growth
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
          image={store2}
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          Overview of Stores
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
          <Typography gutterBottom variant="h5" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          Get the most from your Store
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
          image={store3}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          Promote and optimize your Store
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
          image={store4}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>
          How to plan for holiday shopping periods
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