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
import SignUpsuccess from './SignUpSuccess';
import Footer from "./Footer";
import '../fonts/roboto/roboto.css';
import '../styles/main.css';
import Main from './Main';
import Search from './Search';
import Car from './Car';
import MyCars from './myCars';
import AddCarsStepOne from './addCarsStepOne';
import AddCarsStepTwo from './addCarsStepTwo';
import AddCarsStepThree from './addCarsStepThree';
import AddCarsStepFour from './addCarsStepFour';
import AddCarsSuccess from './addCarsSuccess';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Router>
             <Switch>
                <Route path="/About">
                  <Header />
                  <About />
                  <Footer />
                </Route>
                <Route exact path="/Faq">
                  <Header />
                  <Faq />
                  <Footer />
                </Route>
                <Route exact path="/Search">
                  <Header />
                  <Search />
                  <Footer />
                </Route>
                <Route exact path="/Car">
                  <Header />
                  <Car />
                </Route>
                <Route exact path="/myCars">
                  <Header />
                  <MyCars />
                </Route>
                <Route exact path="/signUp/stepone" component={SignUpstepone}/>
                <Route exact path="/signUp/steptwo" component={SignUpsteptwo}/>
                <Route exact path="/signUp/stepthree" component={SignUpstepthree}/>
                <Route exact path="/signUp/success" component={SignUpsuccess}/>
                <Route exact path="/addCars/stepone">
                  <Header />
                  <AddCarsStepOne />
                </Route>
                <Route exact path="/addCars/steptwo">
                  <Header />
                  <AddCarsStepTwo />
                </Route>
                <Route exact path="/addCars/stepthree">
                  <Header />
                  <AddCarsStepThree />
                </Route>
                <Route exact path="/addCars/stepfour">
                  <Header />
                  <AddCarsStepFour />
                </Route>
                <Route exact path="/addCars/success">
                  <Header />
                  <AddCarsSuccess />
                </Route>
                <Route path="/">
                  <Header />
                  <Main />
                  <Footer />
                </Route>
             </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
