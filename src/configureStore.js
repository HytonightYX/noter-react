// 通过 createStore 创建一个 store
import {applyMiddleware, compose, createStore} from 'redux'
import {rootReducer} from './reducer'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...[thunk]),  // 需要使用的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store