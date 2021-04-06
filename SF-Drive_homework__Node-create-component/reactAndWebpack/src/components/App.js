import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Header from "./Header";
import About from './About';
import Faq from './Faq';
import SignUpstepone from './SignUpStepone';
import SignUpsteptwo from './SignUpSteptwo';
import SignUpstepthree from './SignUpStepthree';
import Footer from "./Footer";
import '../fonts/roboto/roboto.css';
import '../styles/main.css';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Router>
          <Header />
             <Switch>
                <Route path="/About">
                  <About />
                  <Footer />
                </Route>
                <Route exact path="/Faq">
                  <Faq />
                  <Footer />
                </Route>
                <Route exact path="/signUp/stepone" component={SignUpstepone}/>
                <Route exact path="/signUp/steptwo" component={SignUpsteptwo}/>
                <Route exact path="/signUp/stepthree" component={SignUpstepthree}/>
             </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
