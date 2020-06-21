import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Landing from "./landing";
import Statistics from "./Stats";
import "./App.scss";

const history = createBrowserHistory();

function App() {
  // return <Landing />;
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/statistics" component={Statistics} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
