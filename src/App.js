import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Layout1 from './component/layout1/Home';
import Layout2 from './component/layout2/Home';
import Layout3 from './component/layout3/Home';

function App() {
  return (
    <Router>
      <div className="App">
      

        <Switch>
          <Route path="/layout1" exact>  <Layout1 />  </Route>
          <Route path="/layout2" exact>   <Layout2 />  </Route>
          <Route path="/layout3" exact>   <Layout3 />  </Route>
        </Switch>
        <a href="/layout1">Layout 1</a>
      <a href="/layout2">Layout 2</a>
      <a href="/layout3">Layout 3</a>
      </div>
    </Router>
  );
}

export default App;
