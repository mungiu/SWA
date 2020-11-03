import React from 'react'

// NOTE: onLogin is a passed in call-back function
// it is possible to defined multiple buttons in here just like onLogin
const Buttons =({onLogin}) => (
    <div>
        <button id="loginButton" onClick={onLogin}>Login</button>
    </div>
)

export default Buttons