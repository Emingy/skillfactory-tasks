import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route, IndexRoute, Switch,
  Link
} from 'react-router-dom';

import Header from "./Header";
import About from './About';
import Faq from './Faq';
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
             <Route exact path="/About" component={About}/>
            <Route exact path="/Faq" component={Faq}/>
             </Switch>
        </Router>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
