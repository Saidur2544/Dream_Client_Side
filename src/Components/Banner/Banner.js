import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from "../../images/B1.jpg";
import Banner2 from "../../images/B2.jpg";
import Banner3 from "../../images/B3.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <Carousel className="opacity-75">
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3 className="fw-bold">Explore Your Travel </h3>
                    <p>Discover your next great adventure, become an explorer to get started!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fw-bold">Explore Your Travel </h3>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">Explore Your Travel </h3>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};

export default Banner;