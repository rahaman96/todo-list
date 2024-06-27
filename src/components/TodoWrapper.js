
import React,{useState} from "react";
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { Todo } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    };

    const deleteTodo = (id) => {
        const deletedTask = todos.find((todo) => todo.id === id)?.task;
        setTodos(todos.filter((todo) => todo.id !== id));
       
        if (deletedTask) {
            toast.error(`Task "${deletedTask}" has been deleted.`);
        }
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>TODO LIST</h1>
            <TodoForm addTodo={addTodo} className='todo-list' />
            {/* display todos */}
            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
            <ToastContainer />
        </div>
    );
};
