import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const BoxList = () => {
	const [divs, setDivs] = useState([]);
	const addDiv = (div) => {
		let newDiv = { ...div, id: uuid() };
		setDivs((divs) => [...divs, newDiv]);
	};
	const removeDiv = (id) => {
		setDivs(divs.filter((div) => div.id !== id));
	};
	return (
		<div>
			<NewBoxForm addDiv={addDiv} />
			<div>
				{divs.map((div) => (
					<Box
						key={div.id}
						id={div.id}
						width={div.width}
						height={div.height}
						color={div.color}
						remove={removeDiv}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
