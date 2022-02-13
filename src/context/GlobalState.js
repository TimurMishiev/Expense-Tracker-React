import React, { createContext, useReduser } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = [
	{ id: 1, text: "Flower", amount: -20 },
	{ id: 2, text: "Vodka", amount: -20 },
	{ id: 3, text: "Seledka", amount: -20 },
	{ id: 4, text: "Kartoha", amount: -20 },
	{ id: 4, text: "Salary", amount: 2220 },
];

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = () => {
	const [state, dispatch] = useReduser(AppReducer, initialState);

	return (
		<GlobalContext.Provider
			value={{ transactions: state.transactions }}
		></GlobalContext.Provider>
	);
};
