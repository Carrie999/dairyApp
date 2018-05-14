import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import NotFound from './NotFound'
import Write from './Write'
import Memory from './Memory'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/notFound' component={NotFound}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/write' component={Write}/>
      <Route exact path='/memory' component={Memory}/>
    </Switch>
  </main>
)
export default Main
