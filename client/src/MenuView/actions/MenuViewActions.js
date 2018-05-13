import React from 'react'
import store from 'store'
import api from 'lib/api'

api.new('/api')

export function getMenu(username){
	return api.get('/getmenu/' + username).then(resp => {
		store.dispatch({
			type: 'GET_MENU',
			payload: resp.data.menu
		})
	})
}

function changeMessage (itemObj, currentTruck){
	clearCart()
	addToCart(itemObj, currentTruck)
	store.dispatch({
		type: 'ALERT',
		payload: ''
	})
}

function closeMessageBox () {
	store.dispatch({
		type: 'ALERT',
		payload: ''
	})
}

export function addToCart(itemObj, currentTruck, truckUserName){
	const cartSource = store.getState().MenuViewReducer.cartSource
	itemObj.truckUserName = truckUserName
	return cartSource === '' ?
		(
			store.dispatch({
				type: 'UPDATE_CART_SOURCE',
				payload: currentTruck
			}),
			store.dispatch({
				type: 'ADD_TO_CART',
				payload: itemObj
			})
		)
	: cartSource === currentTruck ?
		store.dispatch({
			type: 'ADD_TO_CART',
			payload: itemObj
		})
	: store.dispatch({
		type: 'ALERT',
		payload: 
			<div>
				Your cart contains items from another food truck. Please complete your current order or clear your cart to proceed
				<button onClick={closeMessageBox}>Close this window</button>
				<button onClick={() => changeMessage(itemObj, currentTruck)}>Clear cart and add item</button>
			</div>
		})
}

export function totalItems(){

}

export function removeFromCart(itemIndex){
	const newCart = store.getState().MenuViewReducer.cart	

	store.dispatch({
		type: 'REMOVE_FROM_CART',
		payload: newCart.filter((it, ind)=> ind !== itemIndex)
	})
}

export function clearCart(){
	store.dispatch({
		type: 'CLEAR_CART'
	})
}
