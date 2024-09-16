import CostItem from "./CostItem";
import "./CostList.css";

const CostList = props => {
  if (props.costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">В ЦЬОМУ РОЦІ НЕМА НІЯКИХ ВИТРАТ!</h2>
    );
  }

  return (
    <div>
      <ul className="cost-list">
        {props.costs.map(cost => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default CostList;
