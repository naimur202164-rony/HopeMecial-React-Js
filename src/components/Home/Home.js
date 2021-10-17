import React, { useEffect, useState } from 'react';
import Services from './Services/Services';

const Home = () => {
    const [services ,setService]=useState([]);
    useEffect(()=>{
            fetch('./data.JSON')
            .then(res=>res.json())
            .then(data=>setService(data))
    },)
    return (
        <div className="container">

                    <div className="row">
                    {
                services.map(service=>
                    
                      
                            <Services  

                                service={service}
                                    key={service.id}
                            ></Services>
                       
                    
                    )
                }
                    </div>
                  
                


                    
               
        </div>
    );
};

export default Home;