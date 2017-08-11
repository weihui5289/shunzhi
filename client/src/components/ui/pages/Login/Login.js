import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../../../../settings'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './login.css'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends Component {

  login = (e) => {
    e.preventDefault()
    //用this指向input的内容
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username, password}
    if(username === ''){
      this.props.dispatch({ type: 'SHOW_ALERT', message: '用户名不能为空' })
      return
    }
    //post 请求，然后返回userId,用户的姓名
    axios.post(`${Settings.host}/user/login`, data)
    .then(res => {
      // console.log(res)data下面的返回值
      if(res.data.username) {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.username,id: res.data.userId })
        //将用户的Id 存到浏览器里面，刷新不会丢失
        localStorage.setItem('userId', res.data.userId)
        this.props.history.push('/dashboard')
      }
    })
    //报错信息采用err.response.msg
    .catch(err => {
      if(err.response){
        const { msg } = err.response.data
        this.props.dispatch({ type: 'SHOW_ALERT', message: msg })
      }
      this.loginForm.reset()  //请空表单
    })
  }

  render() {
    return(
      <div className="login">
        <TitleHeader title="login" />
        <div className="login-content">
        <div className="login-hero" >
          <h1 className="title">
            登录
          </h1>
          <p className="slogan">
            连接小而确定的幸福
          </p>
        </div>
        <form ref={value => this.loginForm = value}
          onSubmit={this.login} className="login-form">
          <div className="login-text-inputs">
            <div className="login-text-inputs-inner">
              <input ref={value => this.usernameInput = value }type="text" placeholder="用户名" />
              <input ref={value => this.passwordInput = value }type="password" placeholder="password" />
            </div>
          </div>
          <div className="login-actions">
            <button type="submit">登录</button>
          </div>
        </form>
        <div className="login-other-option">
          <Link to="/signup">没有账号？请先注册</Link>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(null)(Login)
