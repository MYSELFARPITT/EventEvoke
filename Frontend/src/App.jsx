import React from 'react';
import Home from './pages/Home'; 
import Contact from './pages/Contact'; 
import About from './pages/About'; 


function App() {
  return (<>
  {/* <Home/>
  <Contact/> */}
  <About/>
  </>    
  );
}

export default App;





//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// <Router>
    //   <Switch>
    //     <Route exact path="/" component={Home} /> {/* Render the Home component when the path matches '/' */}
    //   </Switch>
    // </Router>