import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import MenuItem from './MenuItem'

import {getMenu} from '../actions/MenuViewActions'
import './MenuView.css'

class MenuView extends Component{
	state = {}
  
  static defaultProps = {
    menu: []
  }

	componentDidMount(){
		getMenu(this.props.match.params.username).then(resp => '')
	}

	render(){
		return(
			<div className="tprofile-menu-container">
        
				<div className="tprofile-header menuview-header">
      		<p>Menu</p>
      		<button onClick={ e => this.props.toggle(e)} className="menuview-toggle">See Reviews</button>
        </div>
        {this.props.menu.map((item, i) => (
    				<MenuItem key={"menuitem-" + i} item={item}/>
    			)
      	)}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
  	menu: state.MenuViewReducer.activeMenu
  }
}

export default withRouter(connect(mapStateToProps)(MenuView))
