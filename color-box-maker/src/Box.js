import "./Box.css";

const Box = ({ id, width, height, color, remove }) => {
	return (
		<div
			className="Box"
			style={{
				backgroundColor: color,
				width: `${width}px`,
				height: `${height}px`,
			}}
			data-testid="box-created"
		>
			<button onClick={() => remove(id)} className="Box-delete">
				X
			</button>
		</div>
	);
};

export default Box;
