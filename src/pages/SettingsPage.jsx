import React from "react";
import "../css/SettingsPage.css";
import profilePicture from "../assets/people/self/pexels-jonaorle-5673896.jpg"; // Ensure the path is correct

export const SettingsPage = () => {
  return (
    <div className="profile-form">
      {/* Image Section */}
      <div className="image-section">
        <div className="profile-image important">
          <img src={profilePicture} alt="Profile" className="profile-pic" />
          Tilføj billede
        </div>
        <div className="empty-image" />
        <div className="empty-image" />
        <div className="empty-image" />
        <div className="empty-image" />
        <div className="empty-image" />
      </div>

      {/* About Me Section */}
      <div className="about-me-section">
        <label className="important">Om mig</label>
        <textarea placeholder="Om mig ..." className="about-me-input" />
      </div>

      {/* Dating Goals Section */}
      <div className="goals-section">
        <label className="section-label">Dating-Mål</label>
        <div className="goal-options">
          <button className="goal-option">
            👩‍❤️‍👨
            <br />
            Noget seriøst
          </button>
          <button className="goal-option">
            🤷‍♂️ <br /> I don't know
          </button>
          <button className="goal-option">
            😈 <br />
            Noget casual
          </button>
        </div>
      </div>

      {/* Toxic Traits Section */}
      <div className="traits-section">
        <label>Toxic traits</label>
        <div className="traits-options">
          <span>Dishonesty</span>
          <span>Gaslighting</span>
          <span>Manipulation</span>
        </div>
      </div>

      {/* Height Section */}
      <div className="height-section">
        <label>Højde</label>
        <input
          type="text"
          placeholder="Tilføj højde .."
          className="height-input"
        />
      </div>

      {/* Extra Section */}
      <div className="extra-section">
        <span>????</span>
      </div>
    </div>
  );
};
