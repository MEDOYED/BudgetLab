import React, { useState } from "react";
import "./CostForm.css";

const ConstForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // second and third method to update state
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = event => {
    setName(event.target.value);

    // second method to update state
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });

    // third method to update state
    // setUserInput(previousState => {
    //   return {
    //     ...previousState,
    //     name: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = event => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = event => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input onChange={amountChangeHandler} type="text" min="0.01" step="0.01"></input>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input onChange={dateChangeHandler} type="date" min="2019-01-01" step="2025-01-01"></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавити витрату</button>
        </div>
      </div>
    </form>
  );
};

export default ConstForm;
