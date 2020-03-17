import React from "react";
import { shallow } from "enzyme";
import ExpenseListItems from "../../components/ExpenseListItems";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseListItems {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
    