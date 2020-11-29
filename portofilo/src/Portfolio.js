import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Header from './Header'
  import Projectcard from './Projectcard';
function Portfolio() {

    const [state, setState] =useState({
        projects: [
            {pic: '1.jpeg', name: 'Budget',github:'https://github.com/sck916/Budget',depoloyed: 'https://budget21.herokuapp.com/'},
            {pic: '2.jpeg', name: "triva game", github:'www.google.com',depoloyed: 'https://www.amazon.com/'},

        ]
    })

    console.log('this is our state!!' , state)
    state.projects.map((eachProject)=>{
        console.log("Looping?", eachProject);
    })
    return (
    <div>
      <Header />
  <div className="container">

        <h1>COMING SOON pics</h1>

        {state.projects.map((eachProject)=>{
        console.log("Looping?", eachProject);
            return(<Projectcard  title={eachProject.name}
                 github={eachProject.github}
                 depoloyed={eachProject.depoloyed}
                 pic={eachProject.pic}
                 />)
        })}
      {/* <div className="col-lg-4 col-md-12 mb-4">

        <img src="img/1.jpeg" className="img-fluid mb-4" alt=""/>

        <img src="img/2-350x350.jpeg" className="img-fluid mb-4" alt="" data-wow-delay="0.3s" />
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <img src="img/3-350x350.jpeg" className="img-fluid mb-4" alt="" data-wow-delay="0.2s"/>

        <img src="img/5-350x350.jpeg" className="img-fluid mb-4" alt="" data-wow-delay="0.5s"/>

        <img src="img/6-350x350.jpeg" className="img-fluid mb-4" alt="" data-wow-delay="0.5s"/>
      </div> */}
  </div>


  <footer>
    <p className="footer-text">©copyright<br /></p>
  </footer>
  </div>
    );
  }
  
  export default Portfolio;