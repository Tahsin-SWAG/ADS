import { Typography } from '@mui/material';
import { Box , Container} from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function footer() {
  return (
  <Box sx={{backgroundColor:'#232f3e' , marginTop:'3%'}}>
    <Container sx={{paddingBottom:'3%'}}>
    <List sx={{ width: '100%', color:'#767d86'}}>
          <ListItem>
            <ListItemButton component='a' href='#' sx={{":hover":{color:'white'}}}>
              <ListItemText>Conditions of use</ListItemText>
            </ListItemButton>
            <ListItemButton component='a' href='#' sx={{":hover":{color:'white'}}}>
              <ListItemText> Privacy notice</ListItemText>
            </ListItemButton>
            <ListItemButton component='a' href='#' sx={{":hover":{color:'white'}}}>
              <ListItemText> Program policies</ListItemText>
            </ListItemButton>
            <ListItemButton component='a' href='#' sx={{":hover":{color:'white'}}}>
              <ListItemText> Advertising blog </ListItemText>
            </ListItemButton>
            <ListItemButton component='a' href='#' sx={{":hover":{color:'white'}}}>
              <ListItemText>Help and feedback</ListItemText>
            </ListItemButton>
          </ListItem>
    </List>
        <Typography variant="p" sx={{color:'#767d86' , justifyContent:'center' ,display:'flex', marginTop:'2%'}}>© Copyright 2015 - 2022, Amazon</Typography>
    </Container>
    </Box>
  )
}