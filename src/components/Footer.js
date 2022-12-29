/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import { Box , Container} from '@mui/system';
import List from '@mui/material/List';


export default function footer() {
  return (
  <Box sx={{backgroundColor:'#232f3e' , marginTop:'6%'}}>
    <Container >
      <Box sx={{display:'flex' , justifyContent:'center'}}>
        <List sx={{display:'flex' , justifyContent:'center' , textAlign:'center' , alignItems:'center'}}>
          <a style={{margin:'1%' , color:'grey' , textDecoration:'none' }} href='#'>Conditions of use</a>
          <a style={{margin:'1%' , color:'grey' , textDecoration:'none' }} href='#'>Privacy notice</a>
          <a style={{margin:'1%' , color:'grey' , textDecoration:'none' }} href='#'>Program policies</a>
          <a style={{margin:'1%' , color:'grey' , textDecoration:'none' }} href='#'>Advertising blog</a>
          <a style={{margin:'1%' , color:'grey' , textDecoration:'none' }} href='#'>Help snd feedback</a>
        </List>
      </Box>
        <Typography variant="p" sx={{color:'#767d86' , justifyContent:'center' ,display:'flex', marginTop:'2%'}}>© Copyright 2015 - 2022, Amazon</Typography>
    </Container>
    </Box>
  )
}