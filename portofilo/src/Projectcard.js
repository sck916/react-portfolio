import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 

function Projectcard(props) {

    const images = require.context('../public/images', true);
    let rawPic = images(`./${props.pic}`);



    console.log('props!! in card!!', rawPic)
    return (<div className="row">
        <h1>{props.title}</h1>
        <a  target="_blank"href={props.github}>Github</a>
        <a target="_blank" href={props.depoloyed}>depoloyed project</a>
        <img style={{height: '400px'}} src={rawPic.default}></img>
    </div>
    );
  }
  
  export default Projectcard;