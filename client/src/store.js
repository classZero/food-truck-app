<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3e8c44e85719b24b26f50a75b34c7b4828b4d8b6
import {createStore, combineReducers} from 'redux'

import homeReducer from './home/homeReducer'
import loginReducer from './home/loginReducer'
import tProfileReducer from './truckprofile/reducers/tProfileReducer'

//import reducer here

const rootReducer = combineReducers({
  homeReducer,
  loginReducer,
  tProfileReducer
  //add your reducer here
})

const store = createStore(rootReducer)
<<<<<<< HEAD
=======
import {createStore} from 'redux'
import tProfileReducer from './truckprofile/reducers/tProfileReducer'


const store = createStore(tProfileReducer)

export default store
>>>>>>> 548c8305349d8c8f209d0e8abf9ad7feee8a381d
=======

export default store
<<<<<<< HEAD
>>>>>>> kkj-home
=======
>>>>>>> 3e8c44e85719b24b26f50a75b34c7b4828b4d8b6
