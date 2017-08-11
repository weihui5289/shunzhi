import React, { Component } from 'react'
import { connect } from 'react-redux'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import CartItem from './CartItem'
import './cart.css'
import { Link } from 'react-router-dom'

class Cart extends Component {

  checkout = () => {
    this.props.dispatch({ type: 'SHOW_ALERT', message: "欢迎继续购物" })
    this.props.dispatch({ type: 'CLEAE_CART'})
    this.props.history.push('/dashboard')
  }

  render() {
    const { dishes } = this.props
    //有时候为空。所以必须判断下，子组件CartItem  this.props.dish,this.props.dishId
    if(Object.keys(dishes).length !== 0 ) {
      let itemList = Object.keys(dishes).map(id => {
        return (
          <CartItem key={id} dish={dishes[id]} dishId={id}/>
        )
      })
      return(
        <div className="cart">
          <TitleHeader title="购物车" />
          <div className="cart-hero">
            <h1 className="total-price">
              {this.props.totalPrice} 元
            </h1>
          </div>
          <div className="cart-list-wrap">
            <div className="cart-item-list">
              {itemList}
            </div>
            <div onClick={this.checkout}
              className="cart-checkout-button">
              结算
            </div>
          </div>
        </div>
      )
    }else {
      return (
        <div className="showNone">
          购物车是空的,
          <Link to="/dishes">去购物</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.cart.dishes,
  totalPrice: state.cart.totalPrice
})
export default connect(mapStateToProps)(Cart)
