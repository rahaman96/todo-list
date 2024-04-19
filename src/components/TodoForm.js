import React, { useState } from 'react'
import { toast } from 'react-toastify'
export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue('');
            toast.success("Succesfully Added")
        }
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Add Items To Your List' />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}