import './App.css';
import Navigation from './components/navigation';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import Footer from './components/footer';
import Header from './components/header';
import Contact from './components/contact';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/index" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>


    </div>
  );
}
export default App;