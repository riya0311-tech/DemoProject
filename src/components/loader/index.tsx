import loaderImg from './loader.gif'
import { useAppSelector } from '../../store/hooks'
import React from 'react'

export const Loader=()=>{
    const isShow =useAppSelector(state=>state.isShowLoader)
return(<React.Fragment>
    {isShow && <div><img src={loaderImg} alt='Loading...'/></div>}
</React.Fragment>)
}