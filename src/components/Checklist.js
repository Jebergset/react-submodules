import React, { useState } from 'react'
import ChecklistSubmodule from './ChecklistSubmodule'

const CheckList = () => {
    const array = ["feed cat", "eat, drink", "sleep", "stay optimistic", "don't buy shit"]
    const [todos, setTodos] = useState(array)
    const remove = (i) => {
        setTodos(
            todos.filter( todo => todo !== todos[i] )
        )
    }

    const addItem = (e) => {
        if(e.keyCode === 13) {
            setTodos( [...todos, e.target.value] )
            e.target.value = ''
        }
        
    }

    return(
        <div className="submodule">
            <h2>Checklist</h2>
            <input type="text" onKeyDown={addItem} placeholder="add items to your checklist" />
            {
                todos.map(
                    (todo, i) => <ChecklistSubmodule remove={remove} myNumber={i} todo={todo} />
                )
            }
        </div>
    )
}

export default CheckList