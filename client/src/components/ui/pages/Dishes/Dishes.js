import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './dishes.css'
import DishCard from './DishCard'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import { connect } from 'react-redux'

class Dishes extends Component {
  render(){
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
    console.log('dishes', this.props.dishes)
    const { dishes } = this.props
    let slideStr = Object.keys(dishes).map(id => (
      <div key={id} className="dish-card-wrap"><DishCard dish={dishes[id]} dishId={id} /></div>
    ))

    let slide = (
      <Slider {...settings}>
        { slideStr}
      </Slider>
    )
    return(
      <div className="dishes">
        <TitleHeader title="猜你喜欢" />
        { Object.keys(this.props.dishes).length === 0 ? '' : slide }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dishes)
