import {userData} from '../reducer/constant'
import {loader} from '../reducer/constant'


export const dispatchUserData=(data)=>{
    return{
        type:userData,
        payload:data
    }
}


export const dispatchLoader=(data)=>{
    return{
        type:loader,
        payload:data
    }
}
