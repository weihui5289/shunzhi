import React, { Component } from 'react'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Settings from './settings.js'
import axios from 'axios'
import { connect } from 'react-redux'
import store from './redux/store'

import {
  Switch,
  Route
} from 'react-router-dom'

class Main extends Component {

  componentWillMount() {

    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`).then(res => {
      const { dishes } = res.data
      store.dispatch({ type: 'LOAD_DISHES', dishes })
    })
  }
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    )
  }
}

export default Main
