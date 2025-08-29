import { useState } from "react";
import { requests } from "../src/mockData";
import RequestCard from "../src/Components/RequestCard";
import "./UserDashboard.css";

function UserDashboard() {
  const [sortOrder, setSortOrder] = useState("newest"); // 'newest' or 'oldest'
  const [filterStatus, setFilterStatus] = useState("all"); // 'all', 'Completed', 'Pending'

  const total = requests.length;
  const completed = requests.filter((r) => r.status === "Completed").length;
  const pending = requests.filter((r) => r.status !== "Completed").length;
  const totalPoints = requests.reduce((acc, r) => acc + r.points, 0);

  const getFilteredAndSortedRequests = () => {
    let sorted = [...requests];
    if (sortOrder === "oldest") {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (filterStatus !== "all") {
      return sorted.filter((r) => r.status === filterStatus);
    }
    return sorted;
  };

  const displayedRequests = getFilteredAndSortedRequests();

  return (
    <div className="userdiv">
      <h2 className="userh2">🌿 User Dashboard</h2>

      {/* Summary Section */}
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

      {/* Controls Section */}
      <div className="controls">
        <div className="filter-buttons">
          <button onClick={() => setFilterStatus("all")}>All</button>
          <button onClick={() => setFilterStatus("Completed")}>Completed</button>
          <button onClick={() => setFilterStatus("Pending")}>Pending</button>
        </div>
        <div className="sort-buttons">
          <button onClick={() => setSortOrder("newest")}>Newest First</button>
          <button onClick={() => setSortOrder("oldest")}>Oldest First</button>
        </div>
      </div>

      {/* Request List */}
      <div className="reqList">
        {displayedRequests.length > 0 ? (
          displayedRequests.map((req) => (
            <RequestCard key={req.id} req={req} />
          ))
        ) : (
          <p className="no-requests-msg">You have no requests to display.</p>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
