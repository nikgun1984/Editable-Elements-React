import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
	Table,
	TableContainer,
	Paper,
	TableCell,
	TableHead,
	TableRow,
	TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	table: {
		margin: "40px auto 0",
		textAlign: "center",
		border: "1px solid black",
	},
	tableHead: {
		fontWeight: "bolder",
		fontSize: "large",
	},
	hidden: {
		display: "none",
	},
});

const TodoList = () => {
	const classes = useStyles();
	const [todos, setTodos] = useState([]);
	// const [isEdit, setIsEdit] = useState(false);
	const [isHidden, setIsHidden] = useState(true);
	const addTodo = (toDo) => {
		const newTodo = {
			...toDo,
			id: uuid(),
			isSelected: false,
			isEdit: false,
		};
		setTodos((todos) => [...todos, newTodo]);
		setIsHidden(false);
	};
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
		console.log(todos.length);
		if (todos.length - 1 < 1) setIsHidden(true);
	};
	const editTodo = (id) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, isEdit: true } : todo))
		);
	};

	const doneEdit = (id) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, isEdit: false } : todo))
		);
	};

	const handleTextField = (e, id) => {
		const { value } = e.target;
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: value } : todo))
		);
	};
	const doneTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? todo.isSelected
						? { ...todo, isSelected: false }
						: { ...todo, isSelected: true }
					: todo
			)
		);
	};
	return (
		<div>
			<h1>Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<TableContainer
				component={Paper}
				className={`${classes.table} ${isHidden ? classes.hidden : ""}`}
			>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="center" className={classes.tableHead}>
								Done?
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Todo Item
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Delete
							</TableCell>
							<TableCell align="center" className={classes.tableHead}>
								Edit
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{todos.map((toDo) => (
							<TableRow key={toDo.id}>
								<Todo
									id={toDo.id}
									todo={toDo.todo}
									removeTodo={removeTodo}
									editTodo={editTodo}
									isEdit={toDo.isEdit}
									doneEdit={doneEdit}
									handleChange={handleTextField}
									isItemSelected={toDo.isSelected}
									doneTodo={doneTodo}
								/>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TodoList;
