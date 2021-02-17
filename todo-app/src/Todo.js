import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/DoneOutline";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	done: {
		textDecoration: "line-through",
	},
	pointer: {
		cursor: "pointer",
	},
	todo: {
		border: "1px solid black",
		margin: "5px",
	},
});

const Todo = ({
	id,
	todo,
	removeTodo,
	editTodo,
	isEdit,
	doneEdit,
	handleChange,
	isItemSelected,
	doneTodo,
}) => {
	const classes = useStyles();
	return (
		<>
			<TableCell padding="checkbox">
				<Checkbox
					checked={isItemSelected}
					inputProps={{ "aria-labelledby": id }}
					onClick={() => doneTodo(id)}
				/>
			</TableCell>
			<TableCell
				component="th"
				scope="row"
				className="Todo-li"
				id={id}
				align="center"
			>
				{isEdit ? (
					<TextField
						name={id}
						onChange={(e) => handleChange(e, id)}
						value={todo}
					/>
				) : (
					<p className={isItemSelected ? classes.done : ""}>{todo}</p>
				)}
			</TableCell>
			<TableCell align="center">
				<button className={classes.pointer} onClick={() => removeTodo(id)}>
					<DeleteIcon />
				</button>
			</TableCell>
			<TableCell align="center">
				{isEdit ? (
					<DoneIcon className={classes.pointer} onClick={() => doneEdit(id)} />
				) : (
					<EditIcon className={classes.pointer} onClick={() => editTodo(id)} />
				)}
			</TableCell>
		</>
	);
};

export default Todo;
