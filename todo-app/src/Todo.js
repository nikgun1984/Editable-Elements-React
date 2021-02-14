import "./Todo.css";

const Todo = ({ id, todo, removeTodo, editTodo }) => {
	return (
		<>
			<li className="Todo-li" id={id}>
				{todo} --
				<button className="Todo-pointer" onClick={() => removeTodo(id)}>
					X
				</button>
				<button className="Todo-pointer" onClick={() => editTodo(id)}>
					Edit
				</button>
			</li>
		</>
	);
};

export default Todo;
