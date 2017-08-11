import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'
import { connect } from 'react-redux'
import store from '../../../../redux/store'
import Settings from "../../../../settings"

import {
  Link,
  withRouter
} from 'react-router-dom'

class Sidebar extends Component {

  state = {
    isOpen: false
  }

  //点击跳转之后关闭侧边栏
  closeMenu = () =>{
    this.setState({
      isOpen: false
    })
  }

  logout = () => {
    //删去浏览器存的用户id和密码
    localStorage.removeItem('userId')
    store.dispatch({ type: 'LOG_OUT' })
    this.props.history.push('/')
  }

  render () {
    // console.log(this.props.users)
    const {users} = this.props

    // //会输出一个值和一个空，所以需要判断下
    // if(Object.keys(users).length !==0){
    //   const Id=localStorage.getItem("userId")
    //   console.log(Id)  
    //   console.log(users[Id])
    //   const {avatar} = users[Id]
    //   const hisAvatar = avatar ? `${Settings.host}/uploads/avatars/${avatar}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
    //   console.log(hisAvatar)
    // }

    // const hisAvatar = avatar ? `${Settings.host}/uploads/avatars/${avatars}` : 'http://media.haoduoshipin.com/yummy/default-avatar.png'
    //拿到用户名，登录状态
    const { currentUser, isAuthenticated,id } = this.props.account
    let userInfo = (
      <div onClick={this.closeMenu} className="user-info-text">
        <Link to="/profile" className="bm-user-name">
          {currentUser}
        </Link>
        <Link to="" onClick={this.logout}>退出</Link>
      </div>
    )

    let profileLink =(
      <Link onClick={this.closeMenu} to="/profile" className="menu-item" >个人中心</Link>
    )

    let loginLink =(
      <Link onClick={this.closeMenu} to="/login" className="menu-item" >登录</Link>
    )

    return (
      <Menu isOpen={this.state.isOpen}
            customCrossIcon={ false }>
            <div className="user-info">
              <img className="bm-img"
                src={id?(Object.keys(users).length!==0)? `${Settings.host}/uploads/avatars/${users[id].avatar}` :""  : 'http://media.haoduoshipin.com/yummy/default-avatar.png' } alt="avatar" />
              {isAuthenticated ? userInfo : ''}
            </div>
            <div className="bm-link-list">
              <Link onClick={this.closeMenu} to="/" className="menu-item" >首页</Link>
              {isAuthenticated ? profileLink : loginLink}
              <Link onClick={this.closeMenu} to="/dishes" className="menu-item" >猜你喜欢</Link>
              <Link onClick={this.closeMenu} to="/cart" className="menu-item" >购物车</Link>
            </div>
            <div className="bottom-button">
              <button onClick={this.closeMenu} className ="bm-close-button" >关闭</button>
            </div>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account,
  users: state.user.all
})

export default connect(mapStateToProps)(withRouter(Sidebar))
