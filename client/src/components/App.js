import React, { Component } from 'react'
import '../css/App.css'
import Home from './ui/pages/Home/Home'
import DashBoard from './ui/pages/DashBoard/DashBoard'
import Signup from './ui/pages/Signup/Signup'
import Profile from './ui/pages/Profile/Profile'
import Login from './ui/pages/Login/Login'
import axios from 'axios'
import Settings from '../settings'
import AlertBox from './ui/shared/AlertBox/AlertBox'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import Dishes from './ui/pages/Dishes/Dishes'
import Dish from './ui/pages/Dish/Dish'
import Cart from './ui/pages/Cart/Cart'
import CartButton from './ui/shared/CartButton/CartButton'
import User from './ui/pages/User/User'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'




class App extends Component {
  componentDidMount() {
    // AUTH_USER
    let userId = localStorage.getItem('userId')
    if(userId) {
      axios.get(`${Settings.host}/user/${userId}`).then(res => {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.user.username })
      })
    }

    // LOAD_USERS
    axios.get(`${Settings.host}/users`).then(res => {
        this.props.dispatch({ type: 'LOAD_USERS', users: res.data.users })
      }
    )

    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`).then(res => {
        this.props.dispatch({ type: 'LOAD_DISHES', dishes: res.data.dishes })
      }
    )

    // LOAD_COMMENTS
    axios.get(`${Settings.host}/comments`).then(
      res => {
        const { comments } = res.data
        this.props.dispatch({ type: 'LOAD_COMMENTS', comments })
      }
    )
  }
  render() {
    const { isAuthenticated } = this.props

    return (
      <div>
        <AlertBox />
        <Router>
          <div>
            <Route render={({ location }) => {
                return location.pathname !== '/' ?
                       <Sidebar /> : null
              }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={DashBoard} />
              <Route path="/profile" component={Profile} />
              <Route path="/dishes" component={Dishes} />
              <Route path="/cart" component={Cart} />
              <Route path="/dish/:dishId" component={Dish} />
              <Route path="/user/:userId" component={User} />
            </Switch>
            <CartButton />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated
})

export default connect(mapStateToProps)(App)
