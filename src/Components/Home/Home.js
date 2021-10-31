import React from 'react';
import "./Home.css";
import Navber from '../Shared/Navber/Navber';
import AllTour from '../Shared/AllTour/AllTour';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import About from '../About/About';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <AllTour></AllTour>
            <Places></Places>
            <Footer></Footer>
        </div>
    );
};

export default Home;