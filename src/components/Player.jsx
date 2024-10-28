import { useState } from "react"

export default function Player({name,sympol}){
    const [isEditeing,setIsEditeing]=useState(false)
    return(
        <li>
        <span className="player">
            {isEditeing?(
                <input type="text" disabled={isEditeing} value={name} required/>
            ):(
<span className="player-name">{name}</span>
            )}
        
      <span className="player-symbol">{sympol}</span>
      </span>
      <button onClick={()=>setIsEditeing(!isEditeing)}>{isEditeing?'Save':'Edite'}</button>
      </li>
    )
}