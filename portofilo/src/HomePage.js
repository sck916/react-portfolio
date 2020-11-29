import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Header from './Header'
function Homepage() {
  return (
 <div>
   <Header />

  <div className="container">
    <div className="container-fixed">
      <div className="row">
        <div className="col-lg-10 mainbox">
          <div className="row">
            <div className="col-lg-12">
              <h1></h1>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>

  <div className="card" style={{width: '400px', marginTop:'70px', margin:'auto'}}>
    <h1 className="card-title">Steve Kavuu</h1>
    {/* <img className="card-img-top" src="./public/images/1.jpeg" alt="Card image cap" id="img1" /> */}
    <div className="card-body">
      <p className="card-text">
        Hello, my name is Steve. I am currently a student at Northwestern University's coding program. I am also a
        Husband, Father and Navy veteran. Below is some of my work.

      <div>
          <a href="https://github.com/sck916/" target="_blank">GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/steve-kavuu-8a96611b7/" target="_blank">LinkedIn</a>
          <br />
          <a href="https://budget21.herokuapp.com/" target="_blank">Budget</a>
          <br />
          <a href="https://fitnesstracker13.herokuapp.com/" target="_blank">Fitness Tracker</a>
          <br />
          <a href="https://sck916.github.io/Password-Generator/" target="_blank">Password Generator</a>
          <br />
          <a href="https://young-basin-59453.herokuapp.com/" target="_blank">Employee Directory</a>
      </div>




      </p>
    </div>
  </div>

  <footer>
    <p className="footer-text">©copyright<br /></p>
  </footer>

  </div>

  );
}

export default Homepage;
