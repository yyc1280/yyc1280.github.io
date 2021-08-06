import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../style/style.css"
import Nav from "./Nav"
import Portfolio from "./Portfolio"
import About from "./About"
import Work from "./Work"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio/:name">
            <Work />
          </Route>
          <Route path="/">
            <Portfolio />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(module)(App)
