import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { Route, Switch } from 'react-router-dom'
import './dashboard.css'
import NewDish from './dishes/NewDish'


import Dishes from './dishes/Dishes'

import Orders from './orders/Orders'

const Dashboard = ({match, history}) => (
  <div className='dashboard'>
    <Sidebar selectedIndex={history.location.pathname}/>
    <div className='main'>
      <div className='top-header'></div>
      <div className='content'>
        <Switch>
          <Route exact path={`${match.url}/dishes`} component={Dishes} />
          <Route exact path={`${match.url}/orders`} component={Orders} />
          <Route exact path={`${match.url}/dishes/new`} component={NewDish} />
          <Route render={ () => <div>TODO</div> } />
        </Switch>
      </div>
    </div>
  </div>
)

export default Dashboard
