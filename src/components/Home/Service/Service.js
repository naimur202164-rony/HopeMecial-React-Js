import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {

    const {serviceId}=useParams();
        const [details,setDetails]=useState([]);
        useEffect(()=>{
                fetch(`./data?id=${serviceId}`)
                .then(res=>res.json())
                .then(data=>console.log(data))
        },[]);

        
   
    return (
        <div>
            <h2>{serviceId}</h2>
        </div>
    );
};

export default Service;