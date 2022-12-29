import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { CardActionArea} from '@mui/material';
import Player from '../Photos/player.svg'
import Mind from '../Photos/1.svg';
import Share from '../Photos/share.svg';
import Tool from '../Photos/Tool.svg';
export default function MediaControlCard() {
  return (
    <Container>
        <Box sx={{marginTop:'5%'}}>
  <Typography variant='h4'  component='a' href='#' sx={{textDecoration:'none' , color:'black' , ':hover':{textDecoration:'underline'}}}>Start learning</Typography>
    <Card sx={{ display:{xs:'block' , md:'flex'}}}>
    <CardMedia
        component="img"
        sx={{ maxWidth:{xs:'100%' , md:'50%'} }}
        image={Tool}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 1 auto' ,marginTop:{xs:'1%' , md:'1%'}}}>
          <Typography component='a' href='#' variant="h5" sx={{
                textDecoration: 'none',
                display:'block',
                color: 'black',
                ":hover": {
                    textDecoration: 'underline'
                },
                fontSize: '40px',
          }}>
             Sponsored ads bootcamp
          </Typography>
          <Typography variant='p' sx={{display:'block'}}>
            The sponsored ads bootcamp, designed for new advertisers, 
            covers foundational topics and strategies to help you run high quality campaigns. 
            Through this bootcamp, we'll teach you how to set up campaigns to match your goals, 
            analyze performance data, and implement best practices to improve performance.</Typography> 
        </CardContent>
      </Box>
    </Card>
    </Box>
    <Box sx={{display:{xs:'block' , md:'flex'}}}>
    <Card sx={{ maxWidth:{xs:'95%' , md:345} ,marginTop:'2%'}}>
        <CardMedia
          component="img"
          image={Player}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" href='#'>
           Introduction to Amazon DSP
          </Typography>
          <Typography variant="body2" color="text.secondary">
            LIn this course, you will learn about programmatic advertising with Amazon, as well as the benefits of using Amazon DSP to achieve your programmatic advertising goals.
          </Typography>
        </CardContent>
    </Card>
    <Card sx={{ maxWidth:{xs:'95%' , md:345} , marginLeft:{xs:'0px' , md:'3%'} ,marginTop:'2%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Mind}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Introduction to Sponsored Display
          </Typography>
          <Typography variant="body2" color="text.secondary">
          In this course you will explore Sponsored Display and how it can help your advertising strategy. Sponsored Display allows you to reach audiences across multiple placements to engage shoppers at each stage of the shoppers’ journey.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    <Card sx={{ maxWidth:{xs:'95%' , md:345} , marginLeft:{xs:'0px' , md:'3%'} ,marginTop:'2%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Share}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Learn about Amazon ad types and placements
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This course will introduce you to Amazon Advertising ad types and placements, and creative types. By the end of this course, you will be able to recognize ad types available within Amazon Advertising solutions and identify ad placements on and off Amazon.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </Container>
  );
}