import { useState } from "react";
import PickupForm from "../src/Components/PickupForm";
import "./home.css";
import CountUp from "react-countup";

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.querySelector(".pickup").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1 className="hero-title">♻️ Clean Earth, <span>Green Earth 🌍</span></h1>
        <p className="hero-sub">Join us in making the planet cleaner by donating your e-waste today!</p>
        <button onClick={scrollToForm} className="herobtn bounce">Raise Pickup Now 🚚</button>
      </section>

      {/* Why Donate Section */}
      <section className="info slide-up">
        <h2 className="section-title">Why Donate E-Waste?</h2>
        <div className="cards">
          <div className="card glow">
            <span>♻️</span>
            <p>Helps in safe recycling</p>
          </div>
          <div className="card glow">
            <span>🌍</span>
            <p>Reduces environmental pollution</p>
          </div>
          <div className="card glow">
            <span>💡</span>
            <p>Conserves natural resources</p>
          </div>
        </div>
      </section>

      {/* Pickup Form Section */}
      <section className="pickup fade-in">
        <h2 className="section-title">Raise a Pickup Request</h2>
        <div className="form-container">
          <PickupForm onFormSubmit={handleFormSubmit} />
        </div>

        {submitted && (
          <div className="thankdiv slide-up">
            🎉 Thank you for raising a pickup request! You are contributing to a
            greener planet. 🌿
          </div>
        )}
      </section>

      {/* Impact Section */}
      <section className="impact fade-in">
        <h2 className="section-title">🌟 Our Impact</h2>
        <div className="stats">
          <div>
            <h3 className="animated-number">
              <CountUp end={500} duration={3} />+
            </h3>
            <p>Pickup Requests Completed</p>
          </div>
          <div>
            <h3 className="animated-number">
              <CountUp end={1.2} duration={3} decimals={1} /> Tons
            </h3>
            <p>E-Waste Recycled</p>
          </div>
          <div>
            <h3 className="animated-number">
              <CountUp end={2000} duration={3} />+
            </h3>
            <p>Points Rewarded</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
