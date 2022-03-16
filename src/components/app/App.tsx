import React ,{useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks'

import './App.css';
import {fetchUserData} from '../../thunk/app.js'
import { Loader } from '../loader';
import {Table} from '.././utility/table'
import { Button } from '../utility/button';

const { USER_API } = process.env

const App  =() =>{
const dispatch = useAppDispatch()
const data =useAppSelector((state)=>[state.title,state.first,state.last,state.gender,state.email,state.cell])

const cols=['Title','First Name','Last Name','Gender','Email' ,'Cell']


  useEffect(()=>{
  dispatch(fetchUserData())
  },[dispatch])


  const refreshHanler=()=>{
    dispatch(fetchUserData())
  }
  
  return (
    <div >
      <Loader/>
   <Table cols={cols} data={data}/>
   <Button text='Refresh' hanldeClick={refreshHanler} />
    </div>
  );
}

export default App;
