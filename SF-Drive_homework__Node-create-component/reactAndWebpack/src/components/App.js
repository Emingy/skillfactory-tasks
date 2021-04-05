import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route, IndexRoute, Switch,
  Link
} from 'react-router-dom';

import Header from "./Header";
import About from './About';
import Faq from './Faq';
import SignUp from './SignUp';
import Footer from "./Footer";
import '../fonts/roboto/roboto.css';
import '../styles/main.css';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Router>
             <Switch>
                <Route path="/About">
                  <About />
                  <Footer />
                </Route>
                <Route exact path="/Faq">
                  <Faq />
                  <Footer />
                </Route>
                <Route exact path="/signUp" component={SignUp}/>
             </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
