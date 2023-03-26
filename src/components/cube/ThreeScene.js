import './scene.scss'
import React from 'react'

function ThreeScene() {
  return (
    <div className='parent'><div className="container">
    {Array.from({ length: 400 }).map((_, i) => (
      <div className="trigger" key={i}></div>
    ))}
    <div className="monitor">
      <div className="camera o-x">
        <div className="camera o-y">
          <div className="camera o-z">
            <div className="vr">
              {Array.from({ length: 20 }).map((_, i) => (
                <div className="vr_layer" key={i}>
                  <div className="vr_layer_item"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
   </div>
  )
}

export default ThreeScene






