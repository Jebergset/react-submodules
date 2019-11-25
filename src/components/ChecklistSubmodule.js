import React, {useState} from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import './ChecklistSubmodule.css'

const ChecklistSubmodule = (props) => {
    const [on, setOn] = useState(false)

    const checkMe = () => {
        setOn(!on)
    }
    return(
    <div className="submodule checklist-item">
        <li className={ on ? 'checked' : '' }>{props.todo}</li>
        <AiOutlineDelete onClick={ () => props.remove( props.myNumber) }/>
        <input type="checkbox" onClick={checkMe} />
    </div>
    )
}

export default ChecklistSubmodule