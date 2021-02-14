import { useState } from "react";

const NewBoxForm = ({ addDiv }) => {
	const initialValues = {
		width: 0,
		height: 0,
		color: "#e3ae1e",
	};
	const [formItems, setFormItems] = useState(initialValues);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormItems((formItems) => ({
			...formItems,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addDiv(formItems);
		setFormItems(initialValues);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="width">Width</label>
				<input
					type="text"
					placeholder="width"
					id="width"
					name="width"
					onChange={handleChange}
					value={formItems.width}
				/>
				<label htmlFor="height">Height</label>
				<input
					type="text"
					placeholder="height"
					id="height"
					name="height"
					onChange={handleChange}
					value={formItems.height}
				/>
				<label htmlFor="color">Color</label>
				<input
					type="color"
					placeholder="Background Color"
					id="color"
					name="color"
					value={formItems.color}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default NewBoxForm;
