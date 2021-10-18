import React from "react";
import { Button } from 'react-bootstrap';
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className=" w-70 mx-auto my-4">
          <h4>
            HOPE MEDICAL <span className="text-info">HISTORY</span>{" "}
          </h4>
          <h2>
            EVERYTHING<span className="text-info">BEGAN</span> IN A GARAGE
          </h2>
          <p className="text-muted">
            llentesque semper quis neque dictum hendrerit. Sed nulla ipsum,
            porttitor pharetra tortor in, consequat imperdiet nisi. Phasellus at
            quam tristique, cursus tellus vitae, convallis neque.
          </p>
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col-lg-7 col-sm-12 my-5">
            <div className="my-4">
              <h1 className="text-muted">Our Stories</h1>
              <p className="text-center text-muted">
                Aliquam magna nibh, mattis a urna nec, semper venenatis magna.
                Cras suscipit neque libero, in bibendum orci scelerisque mollis.
                Nunc auctor ut erat vel euismod. Aenean tristique leo eros, at
                gravida massa semper eu.
                <br />
                Fusce imperdiet libero et eros tincidunt, vitae accumsan purus
                pulvinar. Vivamus varius, metus et scelerisque viverra. Morbi
                mattis, lorem sit amet gravida eleifend, nisl felis tincidunt
                dui, nec porta turpis ligula eu nisl. Donec lacus dolor,
                facilisis at tortor ac, congue vulputate.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-muted">The tipping point</h2>
              <p className="text-muted">Quisque eleifend volutpat orci nec fermentum. Curabitur quis dignissim nibh. Suspendisse potenti. Vivamus dictum volutpat dapibus. Fusce sed varius massa. Fusce et purus sit amet erat fermentum rutrum. Pellentesque pellentesque auctor vehicula. Integer ut ligula blandit, pellentesque neque in, hendrerit magna.
                <br />
                Nunc porta vehicula mauris, a hendrerit dolor tempor sed. Etiam euismod dignissim fermentum. Maecenas tincidunt finibus auctor.

                Proin nec tempus nulla, et euismod nulla. Donec ut sem ipsum. Integer ultricies nisi sed augue interdum porta. Vestibulum ac aliquam risus, ac dictum magna. Fusce lacus arcu, facilisis eu odio nec, varius vestibulum sem.
                <br />

                Nulla venenatis auctor quam, ac porta lectus dictum in
                Aliquam sodales nisi sit amet lorem
                Suspendisse vulputate tellus in justo convallis imperdiet
                Morbi id lorem consequat, sodales mi non
                Cras fringilla efficitur elementum
                Nulla venenatis auctor quam, ac porta lectus dictum in
                Aliquam sodales nisi sit amet lorem
                Aliquam sodales facilisis dolor, feugiat elementum tellus condimentum at. Mauris sem nisi, dictum eget facilisis quis, placerat eu nisl. Phasellus consectetur pharetra elit id maximus. Aliquam facilisis sodales erat, sit amet euismod eros dignissim aliquam.</p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div className="my-1">
              <img src="http://asianitbd.com/wp/hopemedical/wp-content/uploads/2016/10/featured-image-5.jpg" />
              <h3 className="text-info">Our Missions</h3>
              <p className="text-muted">Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus. Donec malesuada efficitur dapibus. Cras euismod nunc tellus.</p>
              <Button className="btn btn-info">Read..re</Button>
            </div>
            <div className="my-1">
              <img src="http://asianitbd.com/wp/hopemedical/wp-content/uploads/2016/10/featured-image-6.jpg" />
              <h3 className="text-info">Our Vision & Plan</h3>
              <p className="text-muted">Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus. Donec malesuada efficitur dapibus. Cras euismod nunc tellus.</p>
              <Button className="btn btn-info">Read..re</Button>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
