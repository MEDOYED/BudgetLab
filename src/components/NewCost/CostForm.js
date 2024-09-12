import "./CostForm.css";

const ConstForm = () => {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input type="text"></input>
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input type="text" min="0.01" step="0.01"></input>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" min="2019-01-01" step="2025-01-01"></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавити витрату</button>
        </div>
      </div>
    </form>
  );
};

export default ConstForm;
