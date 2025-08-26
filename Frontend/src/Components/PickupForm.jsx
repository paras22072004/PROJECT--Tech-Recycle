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
    <form onSubmit={handleSubmit} className="pickform">
      <input
        type="text"
        placeholder="Enter Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="pickinput"
        required
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="pickinput"
        required
      />

      <input
        type="text"
        placeholder="Enter Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="pickinput"
        required
      />

      <input
        type="text"
        placeholder="Waste Type (Plastic, Paper, E-Waste)"
        value={form.wasteType}
        onChange={(e) => setForm({ ...form, wasteType: e.target.value })}
        className="pickinput"
        required
      />

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="pickinput"
        required
      />

      <input
        type="time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
        className="pickinput"
        required
      />

      <button className="pickbtn">Submit</button>
    </form>
  );
}

export default PickupForm;
