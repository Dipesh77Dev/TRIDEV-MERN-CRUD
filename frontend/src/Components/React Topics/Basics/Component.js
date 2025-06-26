import React from 'react'
import tts2 from './ImpExp1'
import Sairin2, { tts1, tts4, tts5 } from './ImpExp1'
import * as Tridev from './ImpExp2'
import {chor10, chor20, dbm40} from './ImpExp2'

const Component = () => {
  return (
    <ul style={{display:"flex", flexDirection:"column"}}>
      <li>{tts2}</li> {/* export - Sairin */}
      <li>{Sairin2}</li> {/* Sairin */}
      <li>{tts1} - {tts4} - {tts4()} - {tts5()}</li>{/* Ashish - Blank - Dipesh - Angela*/}
      <li>{tts4}</li> {/* Blank */}
      <li>{tts5}</li> {/* Blank */}
      <li>{tts4()}</li> {/* Dipesh */}
      <li>{tts5()}</li> {/* Angela */}
      <hr />
        <li>{Tridev.chor10}</li>   {/* AK */}
        <li>{Tridev.chor20}</li>    {/* SS */}
        <li>{chor20}</li>   {/* SS */}
        <li>{dbm40} - {dbm40()}</li>   {/* Blank- DD */}
        <li>{Tridev.dbm40()}</li> {/* Blank- DD */}
        <li>{chor10}</li>  {/* AK */}
    </ul>
  )
}

export default Component;
