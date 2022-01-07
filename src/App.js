import "bootstrap/dist/css/bootstrap.min.css"
import { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Record from "./Record";


import Register from "./Register";

function App() {


  return (

    <Router>
      
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/register" component={Register} />
      <Route exact path='/record' component={Record}/>
      </Switch>
    </Router>
  );
}

export default App;
