import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = props => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  let costsContent = <p>В ЦЬОМУ РОЦІ НЕМА НІЯКИХ ВИТРАТ!</p>;

  if (filteredCosts.length > 0) {
    costsContent = filteredCosts.map(cost => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {costsContent}
        {/* {filteredCosts.length === 0 && <p>В ЦЬОМУ РОЦІ НЕМА НІЯКИХ ВИТРАТ!</p>}
        {filteredCosts.length > 0 &&
          filteredCosts.map(cost => (
            <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
            />
          ))} */}
      </Card>
    </div>
  );
};

export default Costs;
