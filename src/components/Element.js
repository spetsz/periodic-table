import React,{useContext} from 'react'
import Ctx from '../Context'
import ACTIONS from '../data/Actions'
const Element = ({element, display}) => {


    const {dispatch} = useContext(Ctx)

    const {xpos, ypos, category, symbol, name} = element

    const hover = ()=>{
        const sound = new Audio('http://freesoundeffect.net/sites/default/files/rollover-30-sound-effect-58352662.mp3')
        sound.play()
    }

    const click = ()=>{
        const sound = new Audio("https://cdn.pixabay.com/audio/2022/02/17/audio_988aaf064c.mp3")
        sound.play()
        dispatch({type : ACTIONS.SET_ELEMENT, payload :element})
        
    }

  return (
    <div display={display} onClick={()=>click()} onMouseEnter={()=>hover()} className="element d-flex flex-column" style={{gridColumnStart : xpos, gridRowStart : ypos}} family={category}>
        <div style={{margin : "auto"}}>{symbol}</div>
        <div className='element-name'>{name}</div>
    </div>
  )
}

export default Element