import { useState } from "react";
import { requests } from "../mockData";
import "./PickupForm.css";

function PickupForm({ onFormSubmit }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    wasteType: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    requests.push({
      id: requests.length + 1,
      user: form.name || "Guest User",
      phone: form.phone,
      address: form.address,
      wasteType: form.wasteType,
      date: form.date,
      time: form.time,
      status: "Pending",
      points: 0,
    });

    alert("Pickup Request Raised ✅");

    setForm({
      name: "",
      phone: "",
      address: "",
      wasteType: "",
      date: "",
      time: "",
    });

    if (onFormSubmit) {
      onFormSubmit();
    }
  };

  return (
    <div className="pickup-container">
      {/* Keeping the form title in the image as part of the overall page, not inside the card */}
      <form onSubmit={handleSubmit} className="pickform">
        {/* Name */}
        <label className="picklabel">Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="pickinput"
          required
        />

        {/* Phone */}
        <label className="picklabel">Phone Number</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          pattern="[0-9]{10}"
          className="pickinput"
          required
        />
        <small className="helper-text">Enter 10-digit phone number</small>

        {/* Address */}
        <label className="picklabel">Address</label>
        <input
          type="text"
          placeholder="Enter Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="pickinput"
          required
        />

        {/* Waste Type */}
        <label className="picklabel">Waste Type</label>
        <select
          value={form.wasteType}
          onChange={(e) => setForm({ ...form, wasteType: e.target.value })}
          className="pickinput pickselect" 
          required
        >
          <option value="">Select Waste Type</option>
          <option value="Plastic">Plastic</option>
          <option value="Paper">Paper</option>
          <option value="E-Waste">E-Waste</option>
        </select>

        {/* Date */}
        <label className="picklabel">Pickup Date</label>
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="pickinput"
          required
        />

        {/* Time */}
        <label className="picklabel">Pickup Time</label>
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="pickinput"
          required
        />

        <button className="pickbtn">Submit Request</button>
      </form>
    </div>
  );
}

export default PickupForm;