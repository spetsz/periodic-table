import React,{useContext} from 'react'
import Ctx from '../Context'
import ACTIONS from '../data/Actions'


const Family = ({family = "All"}) => {

    const {dispatch} = useContext(Ctx)
    
    

  return (

    <button  family={family} type="button" onClick={()=>{family === "All" ? dispatch({type : ACTIONS.SET_FAMILY, payload : ""}) : dispatch({type : ACTIONS.SET_FAMILY, payload : family})}}>{family}</button>

  )
}

export default Family