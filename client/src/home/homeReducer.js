const initialState = {
  truckData: [],
  sortType: '',
  message: '',
  userMessage: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_TRUCK_DATA":
      return {...state, truckData: action.payload}
    case "SORTED_TRUCK_DATA":
      return {...state, truckData: action.payload.values,
                        sortType: action.payload.type}
    case "REMOVE_TRUCK":
      return {...state, userMessage: action.payload}
    case "UPDATE_LOCATION":
      return {...state, userMessage: action.payload}
    case "USER_CREATED":
        return {...state, userMessage: action.payload}
    case "LOGIN_MESSAGE":
        return {...state, userMessage: action.payload}
    case "LOGIN_ERROR":
        return {...state, userMessage: action.payload}
    case "LOGOUT_USER":
        return {...state, userMessage: action.payload}
    case "ALERT":
        return {...state, userMessage: action.payload}
    case "ADDED_REVIEW":
        return {...state, userMessage: action.payload}
    case "ADDED_FAVORITE":
        return {...state, userMessage: action.payload}
    case "REMOVED_FAVORITE":
        return {...state, userMessage: action.payload}
    default:
      return state
  }
}
