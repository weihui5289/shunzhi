import React, { Component } from 'react'
import './user-list.css'
import Settings from '../../../../settings'
import Toggle from 'react-toggle'
import { Link } from 'react-router-dom'


class UserList extends Component {

  state = {
    following: true
  }

  toggleFollow = () => {
    // TODO
  }

  render(){
    const { users } = this.props
    const listStr = Object.keys(users).map(id => (
      <li className="user-list-item"
      key={id}>
       <div style={{ 'backgroundImage': `url(${users[id].avatar ? `${Settings.host}/uploads/avatars/${users[id].avatar}` : Settings.defaultAvatar})`}}
         className="user-list-avatar">
       </div>
       <Link to={`/user/${id}`} className="user-list-username">
         {users[id].username}
       </Link>
       <div className="user-list-switch">
         <label>
           <Toggle
             defaultChecked={this.state.following}
             icons={false}
             onChange={this.toggleFollow} />
         </label>
       </div>
    </li>
    ))
    console.log(listStr)
    return(
      <div className="user-list">
        {listStr}
      </div>
    )
  }
}

export default UserList
