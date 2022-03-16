import {userData} from './constant'
import {loader} from './constant'
import {user} from '../entities/user'

const initialState :user={
            title:'',
            first:'',
            last:'',
            gender:'',
            cell:'',
            email:'',
            isShowLoader:false
    
}

 const rootReducer =(state=initialState,action:any)=>{
  switch (action.type) {
      case userData :
          
          let {gender,cell,email,name} =action?.payload
          let {title ,first ,last} =name
          return { ...state,gender,cell,email,title ,first ,last }

          case loader:
            return { ...state,isShowLoader:action.payload }
         
      default:
          return state;
  }
}


export default rootReducer