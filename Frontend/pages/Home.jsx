import { useState } from "react";
import PickupForm from "../src/Components/PickupForm";
import "./Home.css";

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="home">
      
      <section className="hero">
        <h1>♻️ Clean Earth, Green Earth 🌍</h1>
        <p>Join us in making the planet cleaner by donating your e-waste today!</p>
      
      </section>

      
      <section className="info">
        <h2>Why Donate E-Waste?</h2>
        <div className="cards">
          <div className="card">
            <span>♻️</span>
            <p>Helps in safe recycling</p>
          </div>
          <div className="card">
            <span>🌍</span>
            <p>Reduces environmental pollution</p>
          </div>
          <div className="card">
            <span>💡</span>
            <p>Conserves natural resources</p>
          </div>
        </div>
      </section>

      
      <section className="pickup">
        <h2>Raise a Pickup Request</h2>
        <div className="form-container">
          <PickupForm onFormSubmit={handleFormSubmit} />
        </div>

        {submitted && (
          <div className="thankdiv">
            🎉 Thank you for raising a pickup request! You are contributing to a greener planet. 🌿
          </div>
        )}
      </section>

      
      <section className="impact">
        <h2>🌟 Our Impact</h2>
        <div className="stats">
          <div>
            <h3>500+</h3>
            <p>Pickup Requests Completed</p>
          </div>
          <div>
            <h3>1.2 Tons</h3>
            <p>E-Waste Recycled</p>
          </div>
          <div>
            <h3>2000+</h3>
            <p>Points Rewarded</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
