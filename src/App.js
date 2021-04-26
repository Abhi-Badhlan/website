import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './component/Navbar'
import Home from'./component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/service' component={Service} />
      <Redirect to='/' />
    </Switch>

    </>


  );
}

export default App;
