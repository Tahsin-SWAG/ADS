/* eslint-disable react/jsx-no-duplicate-props */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container , Box } from '@mui/system';
import Seven from '../Photos/7.svg'
import a from '../Photos/a.svg'
import c from '../Photos/c.svg'
import share from '../Photos/share.svg'
import d from '../Photos/d.svg'


export default function ActionAreaCard() {
  return (
  <Container sx={{marginTop:{xs:'10%' , md:'3%'}}}>
 <Typography variant='h4' sx={{color:'black', textDecoration:'none' , ':hover':{textDecoration:'underline'}}} component='a' href='#'>Get Certified</Typography>
    <Box sx={{display:{xs:'block' , md:'flex'} , marginTop:'1%'}}>
    <Card sx={{maxWidth:{xs:'100%' , md:275}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={a}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" sx={{color:'black' , textDecoration:'none' , ':hover':{textDecoration:'underline'}}}  href='#'>
          About the Amazon Advertising Certification Program 
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{maxWidth:{xs:'100%' , md:275} , marginLeft:{xs:'0%' , md:'2%'} , marginTop:{xs:'2%' , md:'0%'}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={Seven}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" sx={{color:'black' , textDecoration:'none' , ':hover':{textDecoration:'underline'}}}  href='#'>
          Sponsored ads certification
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{maxWidth:{xs:'100%' , md:275} , marginLeft:{xs:'0%' , md:'2%'} , marginTop:{xs:'2%' , md:'0%'}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={c}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" sx={{color:'black' , textDecoration:'none' , ':hover':{textDecoration:'underline'}}}  href='#'>
          Amazon retail for advertisers Certification
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{maxWidth:{xs:'100%' , md:275} , marginLeft:{xs:'0%' , md:'2%'} , marginTop:{xs:'2%' , md:'0%'}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={share}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" sx={{color:'black' , textDecoration:'none' , ':hover':{textDecoration:'underline'}}}  href='#'>
          Amazon DSP campaigns certification
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    <Card sx={{maxWidth:{xs:'100%' , md:275} , marginTop:'2%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={d}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="a" sx={{color:'black' , textDecoration:'none' , ':hover':{textDecoration:'underline'}}}  href='#'>
          Amazon DSP Advanced Certification
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </Container>
  );
}