import React from 'react'
import { Route, Switch } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from'./component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'


function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/service' component={Service} />
    </Switch>

    </>


  );
}

export default App;
