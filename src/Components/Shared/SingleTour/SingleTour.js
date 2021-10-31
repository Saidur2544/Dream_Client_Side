import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTour = (props) => {
    const tour = props.tour;
    return (
        <div className="col-lg-4">
            <Card >
                <Card.Img variant="top" src={tour?.img} />
                <Card.Body>
                    <Card.Title className="fw-bolder fs-3 text-primary text-start">{tour?.name}</Card.Title>
                    <Card.Text>
                        <p className="text-start">{tour?.place}</p>
                    </Card.Text>
                    <h4 className="text-start">Booking Fee :$<span className="fw-bold">{tour?.price}</span></h4>
                    
                    <Link to={`/tourDetails/${tour._id}`}> 
                        <Button variant="primary">View More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleTour;