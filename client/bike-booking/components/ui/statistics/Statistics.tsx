import "./statistics.css";

export const Statistics = () => {
  return (
    <div className="statistics">
      <h4 className="title">Statistics:</h4>
      <ul>
        <li className="item">
          <span className="attr">
            Total Bikes: <span className="val">0</span>
          </span>
        </li>
        <li className="item">
          <span className="attr">
            Available Bikes : <span className="val">0</span>
          </span>
        </li>
        <li className="item">
          <span className="attr">
            Booked Bikes: <span className="val">0</span>
          </span>
        </li>
        <li className="item">
          <span className="attr">
            Average bike cost: <span className="val">0.00</span> UAH/hr.
          </span>
        </li>
      </ul>
    </div>
  );
};
