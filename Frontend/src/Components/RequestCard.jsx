import "./RequestCard.css";

function RequestCard({ req, onAction }) {
  return (
    <div className="reqdiv1">
      <div className="req-details">
        <p><b>User:</b> {req.user}</p>
        <p><b>Waste Type:</b> {req.wasteType}</p>
        <p><b>Address:</b> {req.address}</p>
        <p><b>Status:</b> {req.status}</p>
        <p><b>Eco Points:</b> {req.points}</p>

       
        {req.mobile && <p><b>Mobile:</b> {req.mobile}</p>}
        {req.date && <p><b>Date:</b> {req.date}</p>}
        {req.notes && <p><b>Notes:</b> {req.notes}</p>}
      </div>

      {onAction && (
        <div className="reqdiv2">
          <button
            onClick={() => onAction(req.id, "Scheduled")}
            className="reqbtn1"
          >
            Schedule
          </button>
          <button
            onClick={() => onAction(req.id, "Completed")}
            className="reqbtn2"
          >
            Complete
          </button>
          <button
            onClick={() => onAction(req.id, "Cancelled")}
            className="reqbtn3"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default RequestCard;
