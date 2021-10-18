import React from 'react';
import { Card,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
        const {name,img,discription,id}=service
    return (
        <div className="col-lg-4  col-md-2 col-sm-12">
                 
        <Card className="card-style my-3 courses">
         <Card.Img variant="top" src={img} />
         <Card.Body>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
                {discription}
           </Card.Text>
           <div>
                <button className="btn btn-info m-2">Next</button>

              
                <Link to={`/service/${id}`} >
                <button className="btn btn-info">Learn</button>

                </Link>
             
           </div>
         </Card.Body>
       </Card>
 
         </div>
    );
};

export default Services;