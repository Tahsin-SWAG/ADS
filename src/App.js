/* eslint-disable react/jsx-pascal-case */
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Sponsords from "./components/Sponsored";
import Trending from "./components/Trending";
import Certificat from "./components/Certificate";
import Launch from "./components/Launch";
import Authors from "./components/Authors";
import Store from "./components/Store";
import  Campaign  from  "./components/Campaign";
import Footer from "./components/Footer";
import { Box } from "@mui/system";

export default function App() {
    return(
        <Box>
            <Navbar/>
            <Banner/>
            <Sponsords/>
           <Trending/>
            <Certificat/>
            <Launch/>
            <Authors/>
            <Store/>
            <Campaign/>
          <Footer/>
        </Box>
    )
}