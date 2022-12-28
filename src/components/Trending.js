import React, { Component } from "react";
import Slider from "react-slick";
import { Container} from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import One from '../Photos/1.svg'
import Two from '../Photos/2.svg'
import Three from '../Photos/3.svg'
import Four from '../Photos/4.svg'
import Five from '../Photos/5.svg'
import Six from '../Photos/6.svg'
import Seven from '../Photos/7.svg'
import Eight from '../Photos/8.svg'
import Nine from '../Photos/9.svg'


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
      <Container sx={{marginTop:'4%'}}>
       <Typography variant="h4" sx={{marginLeft:'1%' , color:'black' , textDecoration:'none' , ':hover':{textDecoration:'underline'}}} component='a' href='#'>Trending Learning Content</Typography>
        <Slider {...settings}>
          <div>
  <Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={One}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Introduction to Sponsored Display
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
  <Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Two}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Set up your Sponsored Display campaign
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
<Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Three}
        />
        <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Learn about Sponsored Display reporting
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
<Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Four}
        />
        <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Optimize your Sponsored Display campaign
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
<Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Five}
        />
        <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Learn strategies to improve sponsored ads performance
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
   <Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Six}
        />
        <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Optimize your Sponsored Brands campaign
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
  <Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Seven}
        />
        <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Increase consideration on Amazon with sponsored ads
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
<Card sx={{ maxWidth: 345 , height:{xs:'279px' , md:''} , margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Eight}
        />
        <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Learn about sponsored ad types
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{maxWidth: 345 , height:{xs:'279px' , md:'300px'} ,margin:'4%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Nine}
        />
        <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       Advertise with Sponsored Display and the Amazon DSP
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