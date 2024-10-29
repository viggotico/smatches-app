import { useState } from "react";
import "../css/ProfilPage.css"; // Make sure your CSS is properly set up
import profilePicture from "../assets/people/self/pexels-jonaorle-5673896.jpg"; // Ensure the correct image path

export const ProfilPage = () => {
  const [name, setName] = useState("Sarah");
  const [age, setAge] = useState(23);
  const [city, setCity] = useState("Viby");

  return (
    <div className="profile-section">
      <div className="profile-header">
        <a href="profil-settings" className="settings-link">
          Settings
        </a>
      </div>
      <div className="profile-container">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <div className="edit-icon">✏️</div>
        </div>
        <div className="profile-info">
          <p>Navn</p>
          <p>
            <strong>{name}</strong>
          </p>

          <p>Alder</p>
          <p>
            <strong>{age}</strong>
          </p>

          <p>By</p>
          <p>
            <strong>{city}</strong>
          </p>
        </div>
      </div>

      <div className="profile-options">
        <div className="option">
          <p>Push-Notifikations</p>
          <div className="icon">📳</div>
        </div>
        <div className="option">
          <p>Help and Support</p>
          <div className="icon">⁇</div>
        </div>
        <div className="option">
          <p>Log out</p>
          <div className="icon">⬅</div>
        </div>
        <div className="option1">
          <p>
            Ved brug af denne app accepterer du vores vilkår og
            privatlivspolitik. Vi beskytter dine data og bruger dem kun til at
            forbedre din oplevelse. For mere information,{" "}
            <a className="optionp">tryk her.</a>
          </p>
        </div>
      </div>
    </div>
  );
};
