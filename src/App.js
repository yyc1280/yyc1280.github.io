import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { HashRouter, Switch, Route } from "react-router-dom"
import "../style/style.css"
import Nav from "./Nav"
import Portfolio from "./Portfolio"
import About from "./About"
import Work from "./Work"

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio/:name">
            <Work />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default hot(module)(App)
