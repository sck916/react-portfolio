import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage.js'
import Contact from './Contact.js'
import Portfolio from './Portfolio.js'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </Switch>

    </Router>
    </div>
  );
}

export default App;
