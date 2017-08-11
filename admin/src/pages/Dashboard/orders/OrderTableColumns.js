import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const OrderTableColumns = [{
  title: '菜品名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '下单时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
  render: (text) => {
    return <span>{moment(text).format('YYYY-MM-DD kk:mm:ss')}</span>
  },
}, {
  title: '顾客名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '操作',
  dataIndex: '_id',
  key: '_id',
  render: () => {
    return <Link to={`/sendGood`}>发货</Link>
  },
}]

export default OrderTableColumns
