import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
it("renders without crashing", function () {
	render(<TodoList />);
});

// snapshot test
it("matches snapshot", function () {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

// specialized testing
it("can add a new todo", function () {
	const { getByLabelText, queryByText } = render(<TodoList />);

	//no todos just yet
	expect(queryByText("Go Shopping")).not.toBeInTheDocument();

	const toDoItem = getByLabelText("Todo:");
	const btn = queryByText("Submit");

	// fill out the form
	fireEvent.change(toDoItem, { target: { value: "Go Shopping" } });
	fireEvent.click(btn);

	expect(queryByText("Go Shopping", { exact: false })).toBeInTheDocument();
});
