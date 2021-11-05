import React from 'react'

const Todo = (props) => {

    const complete = (item) => {
        const copyTodo = props.todo.map((task, _i) => {
            if (task === item) {
                task.status = !task.status
            };
            return task;
        })
        props.setTodo(copyTodo);
    }

    const deleteThing = (item) => {
        const filteredTodo = props.todo.filter((task, _i) => {
            if (task === item && item.status === true) {
                return task !== item
            }
            return task
        })
        props.setTodo(filteredTodo);
    }

    return (
        <div>
            <ul>
                {props.todo.map((thing, i) => {
                    return (
                        <li
                            key={i}
                            style={{ textDecoration: thing.status ? 'line-through' : '' }}
                        >{thing.text}<input checked={thing.status} onChange={() => complete(thing)} type='checkbox'></input>
                            <button onClick={(e) => deleteThing(thing)}>delete</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo
