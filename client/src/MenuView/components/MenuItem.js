import React, {Component} from 'react'
import { connect } from 'react-redux'

import {addToCart, viewCart} from '../actions/MenuViewActions'

class MenuItem extends Component{
  state = {}

  handleAdd = (e) => {
    e.preventDefault()
    addToCart(this.props.item, this.props.displayedTruck, this.props.truckUserName)
    viewCart()
  }

  render(){
    return(
      <div className="menuview-menu-item">
        <h3>{this.props.item.itemName}</h3>
        <h3 className="menuview-menu-item-price">${this.props.item.itemPrice.toFixed(2)}</h3>
        <h4>{this.props.item.itemType}</h4>
        <p>{this.props.item.itemDescription}</p>
        {/* and truck is active */}
        { this.props.isAuthenticated && this.props.source === 'user'
         ? <button onClick={this.handleAdd} className="menuview-add-to-cart-button" >+Add to cart</button>
         : ''
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    source: state.loginReducer.source,
    displayedTruck: state.tProfileReducer.profile.companyname,
    truckUserName: state.loginReducer.username
  }
}

export default connect(mapStateToProps)(MenuItem)
