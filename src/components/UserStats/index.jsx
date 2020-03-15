import React from "react";
import Chart from "../Chart";
import FilterStats from "../FilterStats";
import DonationsCards from "../DonationsCards";
import "./style.css";
function UserStats() {
  const [filterMonth, setFilterMonth] = React.useState([0, "January"]);

  return (
    <div className="userStats">
      <h1>statistics</h1>
      <FilterStats filterMonth={filterMonth} setFilterMonth={setFilterMonth} />
      <DonationsCards />
      <Chart filterMonth={filterMonth} />
    </div>
  );
}

export default UserStats;
