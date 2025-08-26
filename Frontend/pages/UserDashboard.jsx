import { requests } from "../src/mockData";
import RequestCard from "../src/Components/RequestCard";
import "./UserDashboard.css";

function UserDashboard() {
  const total = requests.length;
  const completed = requests.filter((r) => r.status === "Completed").length;
  const pending = requests.filter((r) => r.status !== "Completed").length;
  const totalPoints = requests.reduce((acc, r) => acc + r.points, 0);

  return (
    <div className="userdiv">
      <h2 className="userh2">🌿 User Dashboard</h2>

      
      <div className="summary">
        <div className="summaryCard">
          <h3>{total}</h3>
          <p>Total Requests</p>
        </div>
        <div className="summaryCard">
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>
        <div className="summaryCard">
          <h3>{completed}</h3>
          <p>Completed</p>
        </div>
        <div className="summaryCard">
          <h3>{totalPoints}</h3>
          <p>Eco Points</p>
        </div>
      </div>

      
      <div className="reqList">
        {requests.map((req) => (
          <RequestCard key={req.id} req={req} />
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
