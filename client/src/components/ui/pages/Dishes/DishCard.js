import React, { Component } from 'react'
import './dish-card.css'
import CommentIcon from '../../icons/CommentIcon'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class DishCard extends Component {
  render() {
    const { dish } = this.props
    return(
      <Link to={`/dish/${this.props.dishId}`} className="dish-card">
        <div style={{ 'backgroundImage' : `url(${dish.poster})` }}
          className="dish-card-poster">
        </div>
        <div className="dish-card-detail">
          <h1 className="dish-name">
            {dish.name}
          </h1>
          <div className="price-tag">
            {dish.price}<span className="unit">元</span>
          </div>
          <div className="dish-card-icon-wrap">
            <div className="dish-card-icon-inner">
              <CommentIcon color="#D0D0D0" />
              <span className="dish-comment-no">
                {Object.keys(this.props.comments).filter(id => this.props.comments[id].dish._id === this.props.dishId).length}
              </span>
            </div>
          </div>
          <div className="dish-desc">
            {dish.desc + dish.desc + dish.desc + dish.desc}
            <div className="dish-desc-mask">
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(DishCard)
