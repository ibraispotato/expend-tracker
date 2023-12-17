import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function Nums({index,text,remove}){
    return (
        <div className="alls">
            
            <div onDoubleClick={()=>remove(text.id)} className={`formes ${text.num >=0? "green" : "red"}`}>
                <p>{text.text}</p>
                <p>${text.num}</p>
            </div> 
                
        </div>
        
    )
}

export default Nums
