import React,{useState,useReducer} from 'react'
import Elements from './data/Elements.json'
import Element from './components/Element'
import Nav from './components/Nav'
import reducer from './Reducer'
import Card from './components/Card'
import Ctx from './Context'
import './App.css'
import ACTIONS from './data/Actions'
const App = () => {
 

 

  const [state, dispatch] = useReducer(reducer, {
    element : {},
    family : "",
    isFullScreen : true
  })

  const [search, setSearch] = useState('')


  const fetchElement = async (searchTerm) =>{

    if(searchTerm){
      const data = await Elements.find(elem => elem.name.toLowerCase() === searchTerm.toLowerCase())

      if(searchTerm && data){
      
        dispatch({type : ACTIONS.SET_ELEMENT, payload : data})
        setSearch('')
        
      }else{
        window.alert('Element not found!')
      }
    }else{
      window.alert('Enter an element to search for')
    }
    
  }

 

  const requestFullScreenAndRotate = async ()=>{
    await document.documentElement.requestFullscreen()
    window.screen.orientation.lock("landscape-primary")
    dispatch({type: ACTIONS.IS_FULLSCREEN , payload : false})

  }

  const click = ()=>{
    const sound = new Audio("https://cdn.pixabay.com/audio/2022/02/17/audio_988aaf064c.mp3")
    sound.play()

    
}

  const {family, element} = state

  return (
    <Ctx.Provider value={{state,click,  search, dispatch, requestFullScreenAndRotate, setSearch, fetchElement}}>

        <Nav />


        <div className='d-flex main justify-content-space-around my-10'>
          <div className='d-grid w-60 hidden'>
            {
              family === "" ? Elements.map((elem, i)=>{
                return <Element element={elem} key={elem.number}/>
              }) : Elements.filter(elem => elem.category === family).map(elem => <Element element={elem} key={elem.number} />)
            }
          </div>

            {element && <Card element={element} /> }
      </div>
    </Ctx.Provider>
    
     


   
    
  )
}

export default App