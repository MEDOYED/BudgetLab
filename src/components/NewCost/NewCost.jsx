import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";
import NewCostBtn from "./NewCostBtn";

const NewCost = props => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const saveCostDataHandler = inputCostData => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    // console.log(costData);
    props.onAddCost(costData);
  };

  const toggleOpenForm = () => {
    setIsOpenForm(prev => !prev);
  };

  return (
    <div className="new-cost">
      {isOpenForm ? (
        <CostForm
          toggleOpenForm={toggleOpenForm}
          onSaveCostData={saveCostDataHandler}
        />
      ) : (
        <NewCostBtn toggleOpenForm={toggleOpenForm} />
      )}
    </div>
  );
};

export default NewCost;
