import AnalyticsChart from "../src/Components/AnalyticsChart";
import { requests } from "../src/mockData";
import "./Analytics.css";

function Analytics() {
  const totalPickups = requests.length;
  const completed = requests.filter(r => r.status === "Completed").length;
  const pending = requests.filter(r => r.status !== "Completed").length;

  const chartData = [
    { name: "Total Pickups", value: totalPickups },
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="andiv">
      <h2 className="anh1">Analytics Dashboard</h2>
     <div className="chartdiv"><AnalyticsChart data={chartData} /></div> 
    </div>
  );
}

export default Analytics;
