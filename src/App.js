import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
// import Contact from './components/Headers/Contact/Contact';
// import About from './components/Headers/aboutUs/About';
// import OurStore from './components/Headers/ourStore/OurStore';


const App = () => {
  return (
    <Router>
      <Main />
      <Switch>
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route path="/about" component={AboutUs} /> */}
        {/* <Route path="/store" component={OurStore} /> */}
      </Switch>
    </Router>


  )

}

export default App;