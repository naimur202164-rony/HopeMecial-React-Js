import React from 'react';

const Gallery = () => {
    return (
        <div>

            <div className="row">
                {/* Div1 */}
                <div className="row">
                    <div className="col-lg-6 col-sm-6 my-5">
                        <h4 className="text-muted my-4">HELLO, WE ARE HOPE MEDICAL!!</h4>
                        <h1 className="my-5">We Care  <br /> <span className="text-info">About Your</span> <br />Health</h1>
                        <p className="text-muted my-5">Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.<br />Claritas est etiam processus dynamicus,</p>
                        <p className="text-muted my-5">lectorum.Mirum est notare quam est notare quam littera.Eodem modo typi, qui nunc nobis clari.


                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet.</p>
                    </div>
                    <div className="col-lg-6 col-sm-6"><img className="img-fluid" src="https://demos.webicode.com/html/medikal/images/slider-images/slider-1.jpg" /></div>

                </div>
            </div>
            {/* Div2 */}

            <div>
                <img className="img-fluid" src="https://demos.webicode.com/html/medikal/images/why-choose-img.jpg" />

            </div>

            {/* Div-3 */}
            <div className="row my-5">
                <div className="col-lg-4 col-sm-12 my-5">
                    <h1>Our<br /><span className="text-info">Founders</span> </h1>
                    <p className="text-muted my-4">Claritas est etiam processus dynamicus, lectorum. Mirum est notare quam est notare quam littera. Eodem modo typi, qui nunc nobis clari.

                    </p>
                    <p className="my-4 text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet.</p>
                </div>
                <div className="col-lg-4 col-sm-12"><img className="img-fluid" src="https://demos.webicode.com/html/medikal/images/founder-2.jpg" />
                    <h3 className="text-center">John Doe</h3>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid" src="https://demos.webicode.com/html/medikal/images/founder-1.jpg" />
                    <h3 className="text-center">Dr Brucye</h3>

                </div>
            </div>
            {/* Div-4 */}
            <div className="row">
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <h1 className="my-5">Blog    <span className="text-info my-5 ">dates</span> </h1>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <img className="img-fluid" src="https://demos.webicode.com/html/medikal/images/blog-img-1.jpg" />
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <h3>THE HOSPITAL-DEPENDENT<span className="text-info">PATIENT</span> </h3>
                    <p>post by John Doe on April 5th, 2015</p>
                    <p>Claritas est etiam processus dynamicus, qui sequ itur mutationem consuetudium lectorum. Mirum est notare quam littera.</p>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <img className="img-fluid" src="https://demos.webicode.com/html/medikal/images/blog-img-2.jpg" />
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <h3>SPENDING MORE<span className="text-info">GETTING </span>  LESS FOR HEALTH CARE</h3>
                    <p>post by John Doe on April 5th, 2015</p>
                    <p>Claritas est etiam processus dynamicus, qui sequ itur mutationem consuetudium lectorum. Mirum est notare quam littera.</p>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6"></div>
                <div className="col-sm-12 col-lg-4 col-md-6"></div>
                <div className="col-sm-12 col-lg-4 col-md-6"></div>
            </div>
        </div>
    );
};

export default Gallery;