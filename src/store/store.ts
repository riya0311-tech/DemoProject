import  {createStore , applyMiddleware } from 'redux'
import rootReducer from '../reducer/reducer'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer,applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

