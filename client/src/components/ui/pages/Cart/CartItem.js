import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart-item.css'

class CartItem extends Component {

  state = {
    itemCount: 1

  }
  //添加数量
  decrement = () => {
    this.props.dispatch({ type: 'DECR_CART_ITEM', dishId: this.props.dishId })
  }
  //减去数量
  increment = () => {
    this.props.dispatch({ type: 'INCR_CART_ITEM', dishId: this.props.dishId })
  }

  render(){
    const { name, poster, price} = this.props.dish
    return(
      <div className="cart-item">
        <div className="cart-item-info">
          <div className="cart-item-poster"
               style={{ 'backgroundImage': `url(${poster})`}}
            >
          </div>
          <div className="name-price-wrap">
            <div className="cart-item-name">
              {name}
            </div>
            <div className="cart-item-price">
              {price}
            </div>
          </div>
        </div>
        <div className="cart-action">
          <div onClick={this.decrement}
            className="minus">
            -
          </div>
          <div className="item-count">
            {this.props.dishes[this.props.dishId].count}
          </div>
          <div onClick={this.increment}
            className="plus">
            +
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    dishes: state.cart.dishes
  })
}

export default connect(mapStateToProps)(CartItem)
