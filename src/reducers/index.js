import counterReducer from './counter'
import isloggedReducer from './islogged'

import { combineReducers}from 'redux'

const allReducers=combineReducers({
    counter:counterReducer,
    logged:isloggedReducer
})
export default allReducers