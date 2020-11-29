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
    <h1 className="card-title">About Me</h1>
    <img className="card-img-top" src="img/1.jpeg" alt="Card image cap" id="img1" />
    <div className="card-body">
      <p className="card-text">
        Hello, my name is Steve. I am currently a student at Northwestern University's coding program. I am also a
        Husband, Father and Navy veteran. Below is some of my work.

      <div>
          {/* <!-- <a href="https://github.com/sck916/">GitHub profile</a>
          <br>
          <a href="https://www.linkedin.com/in/steve-kavuu-8a96611b7/">LinkedIn profile</a>
          <br> --> */}
          <a href="https://sck916.github.io/code-refhomework/">Refactor</a>
          <a href="https://sck916.github.io/responsivehw/">responsive</a>
          <a href="https://sck916.github.io/Password-Generator/">Password Generator</a>
          <a href=" https://sck916.github.io/code-quiz/">Code Quiz</a>
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
