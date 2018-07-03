import jwt from 'jsonwebtoken'

const initialState = {
  isAuthenticated: window.localStorage.getItem('token') ? true : false,
  username: getTokenUsername(),
  source: getTokenSource(),
  avatar: getTokenAvatar(),
  logo: getTokenLogo(),
  id: getTokenId()
}

function getTokenUsername() {
  if(window.localStorage.getItem('token')) {
    const username = jwt.decode(window.localStorage.getItem('token')).user
    return username
  } else {
    return ""
  }
}

function getTokenSource() {
  if(window.localStorage.getItem('token')) {
    const source = jwt.decode(window.localStorage.getItem('token')).source
    return source
  } else {
    return ""
  }
}

function getTokenAvatar() {
  if(window.localStorage.getItem('token')) {
    const avatar = jwt.decode(window.localStorage.getItem('token')).avatar
    return avatar
  } else {
    return ""
  }
}

function getTokenLogo() {
  if(window.localStorage.getItem('token')) {
    const logo = jwt.decode(window.localStorage.getItem('token')).logo
    return logo
  } else {
    return ""
  }
}

function getTokenId() {
  if(window.localStorage.getItem('token')) {
    const id = jwt.decode(window.localStorage.getItem('token')).id
    return id
  } else {
    return ''
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {...state, isAuthenticated: true,
                        username: action.payload.user,
                        source: action.payload.source,
                        avatar: action.payload.avatar,
                        logo: action.payload.logo,
                        id: action.payload.id
                      }
    case "LOGOUT_USER":
      return {...state, isAuthenticated: false,
                        username: '',
                        source: ''}
    default:
      return state
  }
}
