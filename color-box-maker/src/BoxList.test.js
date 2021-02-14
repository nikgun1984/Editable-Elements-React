import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("renders without crashing", function () {
	render(<BoxList />);
});

// snapshot test
it("matches snapshot", function () {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

// specialized testing
it("can add a new div", function () {
	const { getByLabelText, queryByTestId, queryByText } = render(<BoxList />);

	//no todos just yet
	expect(queryByTestId("box-created")).not.toBeInTheDocument();

	const width = getByLabelText("Width");
	const height = getByLabelText("Height");
	const color = getByLabelText("Color");
	const btn = queryByText("Submit");

	// fill out the form
	fireEvent.change(width, { target: { value: "100" } });
	fireEvent.change(height, { target: { value: "100" } });
	fireEvent.change(color, { target: { value: "#ff0000" } });
	fireEvent.click(btn);

	expect(queryByTestId("box-created")).toBeInTheDocument();
	expect(queryByTestId("box-created")).toHaveClass("Box");
});

it("can remove a box", function () {
	const { getByLabelText, queryByTestId, queryByText } = render(<BoxList />);

	const width = getByLabelText("Width");
	const height = getByLabelText("Height");
	const color = getByLabelText("Color");
	const btn = queryByText("Submit");

	// fill out the form
	fireEvent.change(width, { target: { value: "100" } });
	fireEvent.change(height, { target: { value: "100" } });
	fireEvent.change(color, { target: { value: "#ff0000" } });
	fireEvent.click(btn);

	expect(queryByTestId("box-created")).toBeInTheDocument();

	const btnDelete = queryByText("X");
	fireEvent.click(btnDelete);
	expect(queryByTestId("box-created")).not.toBeInTheDocument();
});
