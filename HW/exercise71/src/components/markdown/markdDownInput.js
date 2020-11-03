import React from 'react'

const MarkDownInput = ({ onKeyUp }) => (
    <form>
        Play with markdown: <input type="text" id="markdownInputText" onKeyUp={onKeyUp}></input>
    </form>
)

export default MarkDownInput