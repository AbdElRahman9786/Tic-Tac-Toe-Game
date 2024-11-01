import { useState } from "react"

export default function Player({initialname,sympol,isActive,editeName}){
    const [playerName,setPlayerName]=useState(initialname)
    const [isEditeing,setIsEditeing]=useState(false);
    function hanedlChange(event){
        setPlayerName(event.target.value)
        if (isEditeing){
            editeName(sympol,playerName)
        }
        
    }
    return(
        <li className={isActive?'active':undefined}>
        <span className="player">
            {isEditeing?(
                <input type="text"  value={playerName} required onChange={hanedlChange}/>
            ):(
<span className="player-name">{playerName}</span>
            )}
        
      <span className="player-symbol">{sympol}</span>
      </span>
      <button onClick={()=>setIsEditeing((prev)=>!prev)}>{isEditeing?'Save':'Edite'}</button>
      </li>
    )
}