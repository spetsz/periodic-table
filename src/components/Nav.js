import React,{useContext} from 'react'
import Elements from '../data/Elements.json'
import Family from './Family';
import Ctx from '../Context';
import atom from '../atom.png'
import ACTIONS from '../data/Actions';


const Nav = () => {

    const {click, requestFullScreenAndRotate, setSearch, fetchElement, state, dispatch, search} = useContext(Ctx)
    const {isFullScreen} = state
    return (
    <div className='nav'>
          {isFullScreen ? <button onClick={()=>requestFullScreenAndRotate()}>Go Full Screen</button> : null}
          <div className='text-secondary d-flex align-items-center'>
            <img src={atom} alt="logo" />
            <h1>Periodic Table</h1>
          </div>
          <div>
            <div className='d-flex'>
              <div>
                <input value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search..."/>
                <div className='overflow'>
                  {Elements.filter(element => search && element.name.toLowerCase().includes(search.toLocaleLowerCase())).map(element => <div className='row' key={element.number} onClick={()=>{dispatch({type : ACTIONS.SET_ELEMENT, payload : element}); setSearch('');click()}}>{element.name}</div>)}
                </div>
              </div>
              <button onClick={()=>fetchElement(search)} style={{height: "30px"}} type='button'>Search</button>
            </div>
            
          </div>

          <div className='d-flex'>

            <Family />
            <Family family="metalloid" />
            <Family family="diatomic nonmetal" />
            <Family family="noble gas" />
            <Family family="alkali metal"/>
            <Family family="alkaline earth metal" />
            <Family family="polyatomic nonmetal" />
            <Family family="post-transition metal" />
            <Family family="transition metal"/>
            <Family family="lanthanide" />
            <Family family="actinide" />

           
          </div>

        </div>
  )
}

export default Nav