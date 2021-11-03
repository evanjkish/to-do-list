import React, { useState } from 'react'

const New = (props) => {

    const [itemInput, setItemInput] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        if (itemInput.length === 0) { return }
        props.addTodo({ status: false, text: itemInput });
        console.log(itemInput);
        setItemInput('')
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type="text"
                onChange={(e) => setItemInput(e.target.value)}
                value={itemInput}
            />
            <button>Add</button>
        </form>
    )
}

export default New
