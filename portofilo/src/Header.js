import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <a className="nav-link" href="contact.html">Contact <span className="sr-only">(current)</span></a> */}
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="porfolio.html">Portfolio</a> */}
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="index.html">About</a> */}
            <Link to="/Contact">Contact</Link>
          </li>
  
  
        </ul>
      </div>
    </nav>
    );
  }
  
  export default Header;