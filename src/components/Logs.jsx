import React, { useState } from 'react'

const Logs = ({turns}) => {



  return (
    <ol id='log'>
{turns?.map((turn) =>{
    
    return<li key={`${turn.squer.row}${turn.squer.col}`}>{turn.player}selected{turn.squer.row},{turn.squer.col}</li> 
})}

    </ol>
  )
}

export default Logs