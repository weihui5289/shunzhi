import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const email = this.state.email
    // const password = this.state.password
    this.props.history.push('/dashboard')
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <Input prefix={<Icon type="mail" style={{ fontSize: 14 }} />} placeholder="email" value={this.state.email} onChange={this.handleEmailChange} />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" style={{ fontSize: 14 }} />} type="password" onChange={this.handlePasswordChange}
          placeholder="Password" value={this.state.password} />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
        </FormItem>
      </Form>
    );
  }
}

export default withRouter(LoginForm)
