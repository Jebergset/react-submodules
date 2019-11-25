import React from 'react'

const BasicPropsModules = (props) => {
    return(
    <div className="submodule">
        <h2>Basic Props Module!</h2>
        <p>This is a module that recives a property from its parents (app.js). And the prop is: <b>{props.value}</b> </p>
    </div>
    )
}

export default BasicPropsModules