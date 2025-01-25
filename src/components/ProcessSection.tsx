import React from "react";
import "./ProcessSection.css";

const processSteps = [
  {
    id: "step1",
    title: "Understand Your Needs",
    description: "We start with your requirements.",
    icon: "https://cdn-icons-png.flaticon.com/512/633/633759.png", // Example icon for step1
  },
  {
    id: "step2",
    title: "Propose Solutions",
    description: "We'll craft ideas tailored to your goals.",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050419.png", // Example icon for step2
  },
  {
    id: "step3",
    title: "Deliver Results",
    description: "High-quality, personalized solutions, delivered.",
    icon: "https://cdn-icons-png.flaticon.com/512/3388/3388627.png", // Example icon for step3
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="process-section">
      <div className="process-header">
        <h2>How It Works</h2>
      </div>

      <div className="process-steps">
        {processSteps.map((step) => (
          <div className="step" key={step.id}>
            <div className="step-icon">
              <img src={step.icon} alt={step.title} />
            </div>
            <div className="step-title">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
