import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Services from './Services/Services';
import Footer from './../Footer/Footer';

const Home = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    })
    return (
        <div className="container">
            <div>
                <Banner></Banner>
            </div>
            <h2>SUPPORT GALLERY<br />
                WE OFFER YOU THE <span className="text-info"> BEST SUPPORT</span></h2>
            <div className="row">
                {
                    services.map(service =>


                        <Services

                            service={service}
                            key={service.id}
                        ></Services>


                    )
                }
            </div>





            <Footer></Footer>
        </div>
    );
};

export default Home;