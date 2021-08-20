import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import About from "./Component/About";
import Services from "./Component/Services";
import Home from "./Component/Home";
import Contact from "./Component/Contact";

const Routing = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={()=><Home mode={props.mode} />} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={()=><Services mode={props.mode}/>} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routing;
