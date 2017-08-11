import React, { Component } from 'react'
import { Table } from 'antd'
import DishTableColumns from './DishTableColumns'
import { connect } from 'react-redux'


class Dishes extends Component {

  render() {
    if(Object.keys(this.props.dishes).length !== 0) {
      console.log('Dishes', this.props.dishes)
      const { dishes } = this.props

      let allDishes = Object.keys(dishes).map(id => {
        return {
          _id: id,
          name: dishes[id].name,
          poster: dishes[id].poster,
          desc: dishes[id].desc,
          price: dishes[id].price
        }
      })

      console.log('allDishes', allDishes)
      return (
        <div className='page'>
          <div className='white-block'>
            <div>共{Object.keys(allDishes).length}条</div>
            <Table columns={DishTableColumns}
              dataSource={allDishes}
              pagination={{
                total: Object.keys(allDishes).length,
                defaultPageSize: 10
              }}
              rowKey={record => record._id}
            />
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dishes)
