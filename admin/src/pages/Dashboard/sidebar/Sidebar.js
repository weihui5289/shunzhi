import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

import './sidebar.css'

const SubMenu = Menu.SubMenu

class Sidebar extends Component {
  state = {
    theme: 'light',
  }

  handleLogout = () => {
    this.props.history.push('/')
  }

  handleClick = (e) => {
    this.props.history.push(e.key)
  }

  render() {
    return (
      <div className='sidebar' style={{backgroundColor: '#fff'}}>
        <div className='logo'>
          吮指后台
        </div>
        <div className='menus'>
        <Menu
          style={{borderRight: 'none'}}
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['school', 'course', 'shop', 'goods']}
          selectedKeys={[this.props.selectedIndex]}
          mode='inline'
        >
          <SubMenu key='orders' title={<span><Icon type='file' /><span>订单管理</span></span>}>
            <Menu.Item key='/dashboard/orders'>待发货</Menu.Item>
            <Menu.Item key='/dashboard/orders/completed'>已完成</Menu.Item>
          </SubMenu>

          <SubMenu key='dishes' title={<span><Icon type='file' /><span>菜品管理</span></span>}>
            <Menu.Item key='/dashboard/dishes'>所有菜品</Menu.Item>
            <Menu.Item key='/dashboard/dishes/new'>新建菜品</Menu.Item>
          </SubMenu>

        </Menu>
        </div>
        <div className='bottom'>
          <div className='logout-btn' onClick={this.handleLogout}>登出</div>
          <div className='email'>{ `admin@admin.com` }</div>
        </div>
      </div>
    )
  }
}

export default connect(null)(withRouter(Sidebar))
