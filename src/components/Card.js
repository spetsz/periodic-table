import React from 'react'
import Element from './Element'

const Card = ({element}) => {
  
  const {name,source, appearance, atomic_mass, number, category, phase, electron_configuration, summary} = element
  return (
    <div className={`card ${element.name ? 'align-items-center' : null} d-flex w-35 flex-column bg-primary`}>
      {element.name ? <Element display='card' element={element} />: null} 
      <div className='d-flex flex-column'>

        <div>
            <span className='label'>{name}</span> ({appearance})
        </div>
        
        <div>
            <span className='label'>Atomic mass</span> : {atomic_mass}
        </div>
        <div>
          <span className='label'>Atomic number</span> : {number}
        </div>
        <div>
            <span className='label'>Family</span> : {category}
        </div>
        <div>
            <span className='label'>Phase</span> : {phase}
        </div>
        <div>
            <span className='label'>Electron configuration</span> : {electron_configuration}
        </div>
        <div>
            <div className='label'>Summary:</div>
                {summary}
        </div>
        <div><button type="button"><a href={source} target="_blank">Wikipedia link</a></button></div>
      </div>
    </div>  
    
  )
}

export default Card