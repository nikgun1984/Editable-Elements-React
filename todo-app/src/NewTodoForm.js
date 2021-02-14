import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
	const [formData, setFormData] = useState({ todo: "" });
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(formData);
		setFormData({ todo: "" });
	};
	return (
		<div onSubmit={handleSubmit}>
			<form>
				<label htmlFor="todo">Todo:</label>
				<input
					type="text"
					placeholder="Enter Todo..."
					name="todo"
					id="todo"
					value={formData.todo}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default NewTodoForm;
