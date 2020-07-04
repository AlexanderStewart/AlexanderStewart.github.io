import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//Pages.
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </HashRouter>
  );
};

export default App;
