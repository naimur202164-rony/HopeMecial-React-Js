import React from 'react';
import { useParams } from 'react-router';

const Service = () => {

    const {serviceId}=useParams();
        // const [details,setDetails]=useState([]);
        // useEffect(()=>{
        //         fetch('./data.JSON')
        //         .then
        // },[])
   
    return (
        <div>
            <h2>{serviceId}</h2>
        </div>
    );
};

export default Service;