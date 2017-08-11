import React, { Component } from 'react'
import { Table } from 'antd'
import OrderTableColumns from './OrderTableColumns'


class Orders extends Component {
  state = {
    shops: [
      {
        name: '黑森林',
        username: 'happypeter',
        _id: 'xxxxxx'
      },
      {
        name: '提拉米苏',
        username: 'billie',
        _id: 'x44xxxx'
      }
    ],
    total: 4,
  }

  render() {
    return (
      <div className='page'>
        <div className='white-block'>
          <div>共{Object.keys(this.state.shops).length}条订单</div>
          <Table columns={OrderTableColumns}
            dataSource={this.state.shops}
            pagination={{
              total: this.state.total,
              defaultPageSize: 10
            }}
            rowKey={record => record._id}
          />
        </div>
      </div>
    )
  }
}

export default Orders
