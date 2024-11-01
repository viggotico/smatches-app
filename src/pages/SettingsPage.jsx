import { useState } from "react";
import "../css/SettingsPage.css"; // Make sure your CSS is properly set up
import profilePicture from "../assets/people/self/pexels-jonaorle-5673896.jpg"; // Ensure the correct image path

const SettingsPage = () => {
  return (
    <div className="profile-form">
      <div className="image-section">
        <div className="profile-image important">Tilføj billede</div>
        <div className="empty-image" />
        <div className="empty-image" />
        <div className="empty-image" />
        <div className="empty-image" />
        <div className="empty-image" />
      </div>

      <div className="about-me-section">
        <label className="important">Om mig</label>
        <textarea placeholder="Om mig ..." className="about-me-input" />
      </div>

      <div className="goals-section">
        <label className="important">Dating-Mål</label>
        <div className="goal-options">
          <button className="goal-option">Noget seriøst</button>
          <button className="goal-option">I don't know??</button>
          <button className="goal-option">Noget casual</button>
        </div>
      </div>

      <div className="traits-section">
        <label>Toxic traits</label>
        <div className="traits-options">
          <span>Dishonesty</span>
          <span>Gaslighting</span>
          <span>Manipulation</span>
        </div>
      </div>

      <div className="height-section">
        <label>Højde</label>
        <input type="text" placeholder="Tilføj højde .." />
      </div>

      <div className="extra-section">
        <span>????</span>
      </div>
    </div>
  );
};

export default SettingsPage;
