import {getUserData} from '../../hitApi/index'
import {dispatchUserData} from '../../actions/app'
import {dispatchLoader} from '../../actions/app'

export const fetchUserData =  ()=>{
    return async (dispatch)=>{
        dispatch(dispatchLoader(true))
       const data = await  getUserData()
        dispatch(dispatchUserData(data))
        dispatch(dispatchLoader(false))
        return data
  
  }
}
