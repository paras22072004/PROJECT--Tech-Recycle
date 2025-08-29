import { useState } from "react";
import { requests } from "../src/mockData";
import RequestCard from "../src/Components/RequestCard";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [search, setSearch] = useState("");

  const updateStatus = (id, newStatus) => {
    const req = requests.find((r) => r.id === id);
    req.status = newStatus;
    if (newStatus === "Completed") req.points = 10;
    alert(`Request #${id} marked as ${newStatus}`);
  };

  const filteredRequests = requests.filter((r) =>
    r.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="divadmin">
      <h2 className="adh1">⚙️ Admin Dashboard</h2>

  
      <input
        type="text"
        placeholder="Search by User..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Requests */}
      {filteredRequests.length > 0 ? (
        filteredRequests.map((req) => (
          <RequestCard key={req.id} req={req} onAction={updateStatus} />
        ))
      ) : (
        <p className="no-requests-msg">No matching requests found.</p>
      )}
    </div>
  );
}

export default AdminDashboard;
