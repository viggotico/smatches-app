import React, { useState } from "react";
import "../css/SettingsPage.css";
import profilePicture from "../assets/people/self/pexels-jonaorle-5673896.jpg"; // Ensure the path is correct


export const SettingsPage = () => {
  const [selectedPicture, setSelectedPicture] = useState(profilePicture);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [height, setHeight] = useState("");

  // Funktion til upload af billede
  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPicture(URL.createObjectURL(file));
    }
  };

  // Funktion til valg af dating mål
  const handleGoalClick = (goal) => {
    setSelectedGoal(goal);
  };

  // Funktion til valg/fravalg af "toxic traits"
  const toggleTrait = (trait) => {
    setSelectedTraits((prevTraits) =>
      prevTraits.includes(trait)
        ? prevTraits.filter((t) => t !== trait)
        : [...prevTraits, trait]
    );
  };

  // Funktion til højde input
  const handleHeightChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value <= 300) {
      // Tjekker om værdien er et tal under 300
      setHeight(value);
    }
  };

  return (
    <div className="profile-form">
      {/* Image Section */}
      <div className="image-section">
        <div className="profile-image important">
          <label htmlFor="file-upload">
            <img src={selectedPicture} alt="Profile" className="profile-pic" />
            Tilføj billede
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handlePictureUpload}
          />
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="empty-image" />
        ))}
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
          {["Noget seriøst", "I don't know", "Noget casual"].map(
            (goal, index) => (
              <button
                key={index}
                className={`goal-option ${
                  selectedGoal === goal ? "active" : ""
                }`}
                onClick={() => handleGoalClick(goal)}
              >
                {goal === "Noget seriøst"
                  ? "👩‍❤️‍👨"
                  : goal === "I don't know"
                  ? "🤷‍♂️"
                  : "😈"}
                <br />
                {goal}
              </button>
            )
          )}
        </div>
      </div>

      {/* Toxic Traits Section */}
      <div className="traits-section">
        <label>Toxic traits</label>
        <div className="traits-options">
          {["Dishonesty", "Gaslighting", "Manipulation"].map((trait, index) => (
            <span
              key={index}
              className={selectedTraits.includes(trait) ? "active" : ""}
              onClick={() => toggleTrait(trait)}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Height Section */}
      <div className="height-section">
        <label>Højde</label>
        <input
          type="text"
          placeholder="Tilføj højde .."
          className="height-input"
          value={height}
          onChange={handleHeightChange}
        />
      </div>

      {/* Extra Section */}
      <div className="extra-section">
        <span>????</span>
      </div>
    </div>
  );
};
