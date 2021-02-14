import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = (toDo) => {
		const newTodo = { ...toDo, id: uuid() };
		setTodos((todos) => [...todos, newTodo]);
	};
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	return (
		<div>
			<h1>Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<ul>
				{todos.map((toDo) => (
					<Todo
						key={toDo.id}
						id={toDo.id}
						todo={toDo.todo}
						removeTodo={removeTodo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
