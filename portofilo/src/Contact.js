import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Header from './Header'
function about() {
    return (
      <div>
       <Header />
  
      <form>
        <div className="form-group">
          <div className="col-auto">
            <label for="exampleInputEmail1">Steve Kavuu</label>
  
          </div>
        </div>
        <div className="form-group">
          <div className="col-auto">
            <label for="exampleInputEmail1">mrkavuu@gmail.com</label>
          </div>
        </div>
        <div className="form-group">
          <div className="col-auto">
            <label for="Message">760-547-3259</label>
            
            <a href="https://github.com/sck916/" target="_blank">GitHub profile</a>
            
            <a href="https://www.linkedin.com/in/steve-kavuu-8a96611b7/" target="_blank">LinkedIn profile</a>
            
          </div>
        </div>
  
      </form>
      <footer>
        <p className="footer-text">©copyright</p>
      </footer></div>
  
    );
  }
  
  export default about;