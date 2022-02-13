import React, { useState } from "react";

export const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

	return (
		<>
			<h3>Add new transaction</h3>
			<form>
				<div className="form-control">
					<lable htmlFor="text"> Text</lable>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount"
					/>
				</div>
				<button className="btn">Add Transaction</button>
			</form>
		</>
	);
};
