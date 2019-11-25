import React from 'react'

const DefaultPropsModule = (props) => {
    return(
    <div className="submodule">
        <h2>Default submodule!</h2>
        <p>This is a module that recives a property from its parents (app.js). And the prop is: <b>{props.value}</b> - but wait! There is no property!</p>
    <p>Insted we can give the submodule a default prop: <b>{props.value || 'i am a default value'}</b></p>
    </div>
    )
}

export default DefaultPropsModule