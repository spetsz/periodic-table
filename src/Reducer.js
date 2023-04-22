import ACTIONS from "./data/Actions"

const {SET_ELEMENT, SET_FAMILY, IS_FULLSCREEN} = ACTIONS

const reducer = (state, action)=>{

    switch(action.type){
      
      case SET_ELEMENT :
        return {...state, element : action.payload } 
        
      case SET_FAMILY : 
        return ({...state, family : action.payload})  
       
      case IS_FULLSCREEN :
        return({...state, isFullScreen : action.paylaod})   
      
      default:
        return state   
    }
  }


  export default reducer