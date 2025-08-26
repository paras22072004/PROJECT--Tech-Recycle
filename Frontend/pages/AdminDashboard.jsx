import { requests } from "../src/mockData";
import RequestCard from "../src/Components/RequestCard";
import "./AdminDashboard.css";

function AdminDashboard() {
  const updateStatus = (id, newStatus) => {
    const req = requests.find((r) => r.id === id);
    req.status = newStatus;
    if (newStatus === "Completed") req.points = 10;
    alert(`Request #${id} marked as ${newStatus}`);
  };

  return (
    <div className="divadmin">
      <h2 className="adh1">Admin Dashboard</h2>
      {requests.map((req) => (
        <RequestCard key={req.id} req={req} onAction={updateStatus} />
      ))}
    </div>
  );
}

export default AdminDashboard;
