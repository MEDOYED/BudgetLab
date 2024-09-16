import React, { useState } from "react";
import "./CostForm.css";

const ConstForm = props => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // second and third method to update state
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = event => {
    setInputName(event.target.value);

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
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = event => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = event => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);

    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="text"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            step="2025-01-01"
          ></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавити витрату</button>
          <button onClick={props.toggleOpenForm}>Відмінити</button>
        </div>
      </div>
    </form>
  );
};

export default ConstForm;
