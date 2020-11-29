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

        

        {state.projects.map((eachProject)=>{
        console.log("Looping?", eachProject);
            return(<Projectcard  title={eachProject.name}
                 github={eachProject.github}
                 depoloyed={eachProject.depoloyed}
                 pic={eachProject.pic}
                 />)
        })}
     
  </div>


  <footer>
    <p className="footer-text">©copyright<br /></p>
  </footer>
  </div>
    );
  }
  
  export default Portfolio;