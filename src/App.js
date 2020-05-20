import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './About';
import {Experience} from './components/Experience';
import {Education} from './components/Education';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Courses} from './components/Courses';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import {NavigationBar} from './components/NavigationBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Switch>
              <Route exact path= "/" component={Home} />
              <Route exact path= "/about" component={About} />
              <Route path= "/experience" component={Experience} />
              <Route path= "/education" component={Education} />
              <Route path= "/skills" component={Skills} />
              <Route path= "/projects" component={Projects} />
              <Route path= "/courses" component={Courses} />
              <Route path= "/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
      );
  }
}

export default App;
