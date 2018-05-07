import React, { Component } from 'react'
import Login from '../login/Login'
import {connect} from 'react-redux'
import HomeDropdown from '../dropdowns/homeDropdown/HomeDropdown'
import trucksvg from 'assets/images/truck.svg'
import {Link} from 'react-router-dom'

import './homeHeader.css'

export class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header">
            
        <div className="home-header-login">
          <p>Login:</p>
          <Login />
        </div>

        <div className="logo-container"><Link to="/" style={{color: "inherit", cursor: "pointer"}}><h1 className="content-headers-title">Street Eats</h1></Link> <img className="logo-icon" src={trucksvg} alt="logo"/></div>

        <div className="home-header-dropdown">
          {this.props.username ? <div className="header-user-info"><span>{this.props.username}</span><img src={this.props.avatar} /></div> : ''}
          <HomeDropdown />
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    username: state.loginReducer.username,
    avatar: state.loginReducer.avatar
  }
}

export default connect(mapStateToProps)(HomeHeader)
